# メモ

## 概要

    3画面構成のアプリケーション
    react-routerを使用したページ遷移機能作成
    2画面目,3画面目の都市の天気情報検索機能作成

### フォルダ構成

    components
        Header.tsx Footer.tsx Search.tsx Hero.tsx
    pages
        Home.tsx Page2.tsx Page3.tsx
    cucumber
        specs
            Page2.feature
        steps
            Page2.ts
    mock
        weather.json
    stores
        weather.tsx index.tsx hook.tsx
    tests
        Home.spec.tsx Page2.spec.tsx
    index.tsx (enter point)

### 入力

    cityの名前の英語例えば：tokyo
    正しの名前なら天気情報検索の結果を表示
    間違いの名前ならerrorメセージを表示
