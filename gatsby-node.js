const {
  createSchemaCustomization,
} = require("./src/plugin/createSchemaCustomization")
const { sourceNodes } = require("./src/plugin/sourceNodes")
const { onCreatePage } = require("./src/plugin/onCreatePage")
const { onCreateNode } = require("./src/plugin/onCreateNode")

exports.createSchemaCustomization = createSchemaCustomization
exports.sourceNodes = sourceNodes
exports.onCreatePage = onCreatePage
exports.onCreateNode = onCreateNode
