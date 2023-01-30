function unstable_shouldOnCreateNode({ node }) {
  // We only care about JSON content.
  return node.internal.mediaType === `application/json`
}

exports.unstable_shouldOnCreateNode = unstable_shouldOnCreateNode;

exports.onCreateNode = async (
  {
    node,
    actions,
    loadNodeContent,
    createNodeId,
    createContentDigest,
    reporter,
  },
  { localeJsonSourceName = "locale" }
) => {

  if (!unstable_shouldOnCreateNode({ node })) {
    return
  }

  const {
    absolutePath,
    internal: { type },
    sourceInstanceName,
    relativeDirectory,
    name,
    id,
  } = node

  console.log('translations: type', type)
  console.log('translations: sourceInstanceName', sourceInstanceName)

  // Currently only support file resources
  if (type !== "File") {
    return
  }

  // User is not using this feature
  if (localeJsonSourceName == null) {
    return
  }

  if (sourceInstanceName !== localeJsonSourceName) {
    return
  }

  const activity = reporter.activityTimer(
    `gatsby-plugin-shopify-translations: create node: ${relativeDirectory}/${name}`
  )
  activity.start()

  // relativeDirectory name is language name.
  const language = relativeDirectory
  const content = await loadNodeContent(node)

  // verify & canonicalize indent. (do not care about key order)
  let data
  try {
    data = JSON.stringify(JSON.parse(content), undefined, "")
  } catch {
    const hint = node.absolutePath
      ? `file ${node.absolutePath}`
      : `in node ${node.id}`
    throw new Error(`Unable to parse JSON: ${hint}`)
  }

  const { createNode, createParentChildLink } = actions

  const localeNode = {
    id: createNodeId(`${id} >>> Locale`),
    children: [],
    parent: id,
    internal: {
      content: data,
      contentDigest: createContentDigest(data),
      type: `Locale`,
    },
    language: language,
    ns: name,
    data,
    fileAbsolutePath: absolutePath,
  }


  createNode(localeNode)

  // @ts-ignore
  // staled issue: https://github.com/gatsbyjs/gatsby/issues/19993
  createParentChildLink({ parent: node, child: localeNode })

  activity.end()
}
