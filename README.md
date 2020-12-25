# node-red-contrib-example-qiita-counter

## 概要

Qiitaユーザの投稿数、Contributions、フォロワー数を取得するNode-REDのノードです。

## インストール

```
 $npm install node-red-contrib-example-qiita-counter
```

## 使い方

Inputの msg.payload に取得したいQiitaユーザ名を指定してください。
下記がOutputに出力されます。

```
msg.payload = {
  UserId: Qiitaユーザ名,
  Items: 投稿数,
  Contributions: LGTM数,
  Followers: フォロワー数,
  create_at: 取得に指示
}
```

## 注意事項

QiitaのWebページからScrapingしていますので、Webページの変更により取得できなくなる可能性があります。

## 依存関係

- cheerio
- node-fetch

## Author

poruruba

## License

Apache-2.0
