const { gql } = require("@apollo/client")

exports.translatedProductsQuery = ids => {
  return {
    query: gql`
      query translatedThings($ids: [ID!]!) {
        nodes(ids: $ids) {
          ... on Product {
            __typename
            id
            title
            description
            descriptionHtml
            handle
            productType
            collections(first: 10) {
              edges {
                node {
                  id
                  title
                }
              }
            }
            options {
              __typename
              name
              values
            }
            variants(first: 30) {
              edges {
                node {
                  id
                  title
                  availableForSale
                  selectedOptions {
                    name
                    value
                  }
                }
              }
            }
            metafields(
              identifiers: [
                { namespace: "custom", key: "subtitle" }
                { namespace: "custom", key: "excerpt" }
                { namespace: "custom", key: "detail_1" }
                { namespace: "custom", key: "detail_2" }
                { namespace: "custom", key: "detail_3" }
              ]
            ) {
              id
              key
              value
              description
            }
          }
        }
      }
    `,
    variables: {
      ids,
    },
  }
}

exports.translatedCollectionsQuery = ids => {
  return {
    query: gql`
      query translatedThings($ids: [ID!]!) {
        nodes(ids: $ids) {
          ... on Collection {
            __typename
            id
            title
            description
            descriptionHtml
            handle
          }
        }
      }
    `,
    variables: {
      ids,
    },
  }
}

exports.translatedPagesQuery = ids => {
  return {
    query: gql`
      query translatedThings($ids: [ID!]!) {
        nodes(ids: $ids) {
          ... on Page {
            __typename
            id
            title
            body
            bodySummary
            handle
            metafields(
              identifiers: [{ namespace: "custom", key: "stockist" }]
            ) {
              type
              namespace
              key
              value
              id
              description
            }
          }
        }
      }
    `,
    variables: {
      ids,
    },
  }
}

exports.translatedShopPoliciesQuery = ids => {
  return {
    query: gql`
      query translatedThings($ids: [ID!]!) {
        nodes(ids: $ids) {
          ... on ShopPolicy {
            __typename
            id
            title
            body
            handle
          }
        }
      }
    `,
    variables: {
      ids,
    },
  }
}

exports.translatedMenusQuery = ids => {
  return {
    query: gql`
      query translatedThings($ids: [ID!]!) {
        nodes(ids: $ids) {
          ... on Menu {
            __typename
            id
            handle
            title
            items {
              title
              type
              items {
                title
                type
              }
            }
          }
        }
      }
    `,
    variables: {
      ids,
    },
  }
}
