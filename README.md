# node-red-contrib-example-qiita-counter

## 概要

Qiitaユーザの投稿数、Contributions、フォロワー数を取得するNode-REDのノードです。

## インストール

```
 $npm install node-red-contrib-example-qiita-counter
```

## 使い方

Inputの msg.payload に取得したいQiitaユーザ名を指定してください。

## 注意事項

QiitaのWebページからScrapingしていますので、Webページの変更により取得できなくなる可能性があります。

## 依存関係

- cheerio
- node-fetch

## Author

poruruba

## License

Apache-2.0
