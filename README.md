# Radio-Openapi

document
https://bucketfan.github.io/Radio-Openapi/

### 編集

1. Stoplight Studio をダウンロードして openapi.yaml を編集
2. npm run build:packages でコード自動生成

### ドキュメントの作成

```sh
$ npm install
$ npm run build:doc
```

### モックサーバーの立ち上げ

```sh
$ npm run mockserver
```

### openapi の package インストール方法

1. プロジェクトのルートに`.npmrc`を作成し、以下の内容を追加

   ```
    //npm.pkg.github.com/:_authToken=ACCESS_TOKEN
    @bucketfan:registry=https://npm.pkg.github.com
   ```

2. ACCESS_TOKEN の部分には、GitHub から個人の access token を作成し、追加

   - [Creating a personal access token](https://docs.github.com/ja/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)を参考に token を発行する

     ⚠️ `Generate New Token (Beta)` と `Generate New Token (classic)` の二つが選べると思いますが、`Generate New Token (classic)` を選択してください
     <br/>
     ⚠️ `read:packages` と`public_repo`にチェックを入れて発行してください

3. ログインする

   ```
   $ npm login

   <!-- 以下を順番に聞かれる -->
    Username: github のユーザーネーム (https://github.com/code-yyだったらcode-yy)
    Password: githubのパスワード
    Email: githubに登録しているメールアドレス
   ```

4. パッケージをインストールする

   ```
   $ yarn add @bucketfan/radio-api-client

   $ yarn install
   ```
