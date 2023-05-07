import { renderHook, act } from "@testing-library/react"
import { useThrowError } from "./use-throw-error"

it("ok", () => {
  expect.assertions(2)
  jest.spyOn(console, "error").mockImplementation(() => {})

  const { result } = renderHook(useThrowError)
  const errorMessage = "something error"
  try {
    act(() => {
      result.current.throwError(new Error(errorMessage))
    })
  } catch (error) {
    expect(error).toBeInstanceOf(Error)
    if (error instanceof Error) {
      expect(error.message).toBe(errorMessage)
    }
  }
})
