const cheerio = require('cheerio');
const fetch = require('node-fetch');

module.exports = function(RED) {
    function QiitaCounterNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        node.on('input', async (msg, send, done) => {
            try{
                const UserId = msg.payload || config.userid;
                const text = await do_get('https://qiita.com/' + UserId);
	            const $ = cheerio.load(text);
	            const description = $("meta[name='description']").attr("content");
                const description_list = description.split(' ');
                if( description_list.length < 6 )
                    throw 'get error';

                msg.payload = {
                    UserId: UserId,
                    Items: parseInt(description_list[1]),
                    Contributions: parseInt(description_list[3]),
                    Followers: parseInt(description_list[5])
                };
                send(msg);
            }catch(error){
                done(error);
            };
        });
    }
    RED.nodes.registerType("qiita-counter", QiitaCounterNode);
}

function do_get(url) {
  return fetch(url, {
      method: 'GET',
    })
    .then((response) => {
      if (!response.ok)
        throw 'status is not 200';
      return response.text();
    });
}
