import { useContext } from "react"
import { defaultLang, withDefaults } from "../utils/default-options"
import { LocaleContext } from "../context"
import { localizedPath } from "../helpers"

export const useLocalization = () => {
  // const {language, defaultLang} = useContext(LocaleContext)
  const context = useContext(LocaleContext)
  console.log('useLocalization: ', context)
  const config = withDefaults()

  return {
    // language,
    // defaultLang,
    ...context,
    prefixDefault: config.prefixDefault,
    localizedPath,
  }
}
