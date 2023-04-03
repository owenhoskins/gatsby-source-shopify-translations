const { createOperations } = require("./operations")

const SHOPIFY_PRODUCT = `ShopifyProduct`
const SHOPIFY_COLLECTION = `ShopifyCollection`
const SHOPIFY_PAGE = `ShopifyPage`
const SHOPIFY_SHOPPOLICY = `ShopifyShopPolicy`
const SHOPIFY_MENU = `ShopifyMenu`

const SHOPIFY_TRANSLATED_PRODUCT = `ShopifyTranslatedProduct`
const SHOPIFY_TRANSLATED_COLLECTION = `ShopifyTranslatedCollection`
const SHOPIFY_TRANSLATED_PAGE = `ShopifyTranslatedPage`
const SHOPIFY_TRANSLATED_SHOPPOLCIY = `ShopifyTranslatedShopPolicy`
const SHOPIFY_TRANSLATED_MENU = `ShopifyTranslatedMenu`

exports.resources = [
  {
    id: `Product`,
    connection: `product`,
    nodeType: SHOPIFY_PRODUCT,
    translationsNodeType: SHOPIFY_TRANSLATED_PRODUCT,
    getOperation: (pluginOptions, lang) => {
      const { createTranslatedProductsOperation } = createOperations({
        ...pluginOptions,
        language: lang,
      })
      return createTranslatedProductsOperation
    },
  },
  {
    id: `Collection`,
    connection: `collection`,
    nodeType: SHOPIFY_COLLECTION,
    translationsNodeType: SHOPIFY_TRANSLATED_COLLECTION,
    getOperation: (pluginOptions, lang) => {
      const { createTranslatedCollectionsOperation } = createOperations({
        ...pluginOptions,
        language: lang,
      })
      return createTranslatedCollectionsOperation
    },
  },
  {
    id: `Page`,
    connection: `content`,
    nodeType: SHOPIFY_PAGE,
    translationsNodeType: SHOPIFY_TRANSLATED_PAGE,
    getOperation: (pluginOptions, lang) => {
      const { createTranslatedPagesOperation } = createOperations({
        ...pluginOptions,
        language: lang,
      })
      return createTranslatedPagesOperation
    },
  },
  {
    id: `ShopPolicy`,
    connection: `shop`,
    nodeType: SHOPIFY_SHOPPOLICY,
    translationsNodeType: SHOPIFY_TRANSLATED_SHOPPOLCIY,
    getOperation: (pluginOptions, lang) => {
      const { createTranslatedShopPoliciesOperation } = createOperations({
        ...pluginOptions,
        language: lang,
      })
      return createTranslatedShopPoliciesOperation
    },
  },
  {
    id: `Menu`,
    connection: `navigation`,
    nodeType: SHOPIFY_MENU,
    translationsNodeType: SHOPIFY_TRANSLATED_MENU,
    getOperation: (pluginOptions, lang) => {
      const { createTranslatedMenusOperation } = createOperations({
        ...pluginOptions,
        language: lang,
      })
      return createTranslatedMenusOperation
    },
  },
]
