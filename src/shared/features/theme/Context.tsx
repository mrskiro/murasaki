import * as React from "react"
import * as S from "styled-components"
import { darkTheme, ligthTheme } from "./theme"

const Context = React.createContext({ isDark: false, onToggle: () => {} })

const STORAGE_KEY = "murasak1.com_theme_is_dark"

export const ThemeProvider = (props: React.PropsWithChildren) => {
  const [isDark, setIsDark] = React.useState<boolean>(false)
  const onToggle = () => {
    setIsDark((v) => {
      window.localStorage.setItem(STORAGE_KEY, !v ? "true" : "false")
      return !v
    })
  }

  React.useEffect(() => {
    const value = window.localStorage.getItem(STORAGE_KEY)
    if (!value) {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setIsDark(true)
        return
      }
    }
    setIsDark(value === "true" ? true : false)
  }, [])

  return (
    <Context.Provider value={{ isDark, onToggle }}>
      <S.ThemeProvider theme={isDark ? darkTheme : ligthTheme}>
        {props.children}
      </S.ThemeProvider>
    </Context.Provider>
  )
}

export const useTheme = () => React.useContext(Context)
