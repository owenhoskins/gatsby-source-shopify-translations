import React, { createContext } from "react"
import { defaultLanguage } from "./utils/default-options"

export const LocaleContext = createContext({ defaultLanguage, language: "en" })
