
extension

- ES7 React/Redux/GraphQL/React-Native snippets


- jest-css-modules
testをするときcssモジュールが悪さをしないようにcssを自動でモック化してくれる


```
"moduleNameMapper": {
      "\\.(css)$": "<rootDir>/node_modules/jest-css-modules"
    }
```

テストケース一つ一つにパスしたかどうかを出力したいので
`--verbose`

`npx tailwindcss init -p`
テイルウィンドコンフィグなどのコンフィグを自動で生成してくれる


`purge`
実際につかわえているものがビルド時
cssファイルとして出力してくれる
これを設定しないと全てのユティリティが出力されてしまいファイルサイズが大きくなる



