import * as React from "react"

/**
 * for error boundary
 */
export const useThrowError = () => {
  const [err, setErr] = React.useState<Error | null>(null)
  const throwError = (err: Error) => {
    setErr(err)
  }
  if (err) {
    throw err
  }
  return {
    throwError,
  }
}
