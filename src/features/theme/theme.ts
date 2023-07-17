type ColorCode = `#${string}`

type TextUnit = `${string}rem`

type Theme = {
  brand: ColorCode
  color: ColorCode
  background: ColorCode
  fontSizes: Record<
    "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl",
    TextUnit
  >
}

const fontSizes: Record<string, TextUnit> = {
  /**
   * 12px
   */
  xs: "0.75rem",
  /**
   * 14px
   */
  sm: "0.875rem",
  /**
   * 16px (default)
   */
  md: "1rem",
  /**
   * 18px
   */
  lg: "1.125rem",
  /**
   * 20px
   */
  xl: "1.25rem",
  /**
   * 24px
   */
  "2xl": "1.5rem",
  /**
   * 30px
   */
  "3xl": "1.875rem",
  /**
   * 36px
   */
  "4xl": "2.25rem",
  // next内のbabelがsatisfies対応してない、upgradeしてから
  // } as const satisfies Record<string, TextUnit>
}

export const darkTheme: Theme = {
  brand: "#AA26FF",
  color: "#CED4DA",
  background: "#373A40",
  fontSizes,
}

export const ligthTheme: Theme = {
  brand: "#AA26FF",
  color: "#333",
  background: "#F7FAFC",
  fontSizes,
}

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  export interface DefaultTheme extends Theme {}
}
