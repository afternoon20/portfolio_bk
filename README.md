# ポートフォリオ

## コーディング規約

### Sass は入れ子にしない。ただし、hover や nth(n)-child、ライブラリのクラスのカスタマイズは除く。

```html
<!-- 非推奨 -->
.block{
display: block;

.block__elements{
margin:0;
}
}

<!-- 推奨 -->
.block{
display: block;
}

.block__elements{
margin:0;
}
```
--
