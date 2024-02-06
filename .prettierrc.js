module.exports = {
  singleQuote: true,
  trailingComma: "none",
  semi: true,
  plugins: ["@trivago/prettier-plugin-sort-imports"],
  importOrder: ["<THIRD_PARTY_MODULES>", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderParserPlugins: ["typescript", "classProperties", "decorators-legacy"]
}