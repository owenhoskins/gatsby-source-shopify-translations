import { useContext } from "react"
import { LocaleContext } from "../context"
import { localizedPath } from "../helpers"
import { withDefaults } from "../utils/default-options"

export const useLocalization = () => {
  const context = useContext(LocaleContext) // language, defaultLang
  const config = withDefaults()

  return {
    ...context,
    prefixDefault: config.prefixDefault,
    localizedPath,
  }
}
