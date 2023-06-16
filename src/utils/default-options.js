const defaultLanguage = `en`

function withDefaults(themeOptions) {
  if (!themeOptions) {
    // console.log("withDefaults no themeOptions!")
    // @FIX themeOptions are always undefined
    return { defaultLanguage, prefixDefault: true }
  }

  return {
    ...themeOptions,
    configPath: themeOptions.configPath,
    defaultLanguage: themeOptions.defaultLanguage || defaultLanguage,
    prefixDefault: themeOptions.prefixDefault
      ? themeOptions.prefixDefault
      : false,
    locales: themeOptions.locales || null,
    sourceOnlyMode: themeOptions.sourceOnlyMode
      ? themeOptions.sourceOnlyMode
      : false,
  }
}

module.exports = {
  defaultLanguage,
  withDefaults,
}
