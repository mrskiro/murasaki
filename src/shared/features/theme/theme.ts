type Theme = Record<Key, `#${string}`>

type Key = "color" | "background"

export const darkTheme: Theme = {
  color: "#CED4DA",
  background: "#373A40",
}

export const ligthTheme: Theme = {
  color: "#333",
  background: "#F7FAFC",
}

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
