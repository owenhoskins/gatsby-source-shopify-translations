const { createClient } = require("./create-client")
const {
  translatedProductsQuery,
  translatedCollectionsQuery,
  translatedPagesQuery,
  translatedShopPoliciesQuery,
  translatedMenusQuery,
} = require("./queries")

exports.createOperations = options => {
  const client = createClient(options)

  async function createOperation(operationQuery) {
    return await client.query(operationQuery)
  }

  return {
    createTranslatedProductsOperation: async ids => {
      return await createOperation(
        translatedProductsQuery(ids),
        "TRANSLATED_PRODUCTS"
      )
    },
    createTranslatedCollectionsOperation: async ids => {
      return await createOperation(
        translatedCollectionsQuery(ids),
        "TRANSLATED_COLLECTIONS"
      )
    },
    createTranslatedPagesOperation: async ids => {
      return await createOperation(
        translatedPagesQuery(ids),
        "TRANSLATED_PAGES"
      )
    },
    createTranslatedShopPoliciesOperation: async ids => {
      return await createOperation(
        translatedShopPoliciesQuery(ids),
        "TRANSLATED_SHOPPOLICIES"
      )
    },
    createTranslatedMenusOperation: async ids => {
      return await createOperation(
        translatedMenusQuery(ids),
        "TRANSLATED_MENUS"
      )
    },
  }
}
