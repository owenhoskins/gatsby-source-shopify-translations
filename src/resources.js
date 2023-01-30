const { createOperations } = require("./operations")

const SHOPIFY_PRODUCT = `ShopifyProduct`
const SHOPIFY_COLLECTION = `ShopifyCollection`
const SHOPIFY_PAGE = `ShopifyPage`

const SHOPIFY_TRANSLATED_PRODUCT = `ShopifyTranslatedProduct`
const SHOPIFY_TRANSLATED_COLLECTION = `ShopifyTranslatedCollection`
const SHOPIFY_TRANSLATED_PAGE = `ShopifyTranslatedPage`

exports.resources = [
  {
    id: `Product`,
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
]
