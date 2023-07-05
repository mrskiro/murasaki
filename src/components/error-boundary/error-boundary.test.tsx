import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { useThrowError } from "@/lib/error/use-throw-error"
import { ErrorBoundary } from "./error-boundary"

it("ok", () => {
  const { container } = render(
    <ErrorBoundary fallback={() => <p>error</p>}>
      <h1>children</h1>
    </ErrorBoundary>
  )
  expect(screen.getByText("children")).toBeInTheDocument()
  expect(container).toMatchSnapshot()
})

it("should display fallback when throw error in children", () => {
  jest.spyOn(console, "error").mockImplementation(() => {})
  const Component = () => {
    throw new Error("something error")
  }
  const { container } = render(
    <ErrorBoundary fallback={() => <p>error</p>}>
      <Component />
    </ErrorBoundary>
  )
  expect(screen.getByText("error")).toBeInTheDocument()
  expect(container).toMatchSnapshot()
})

it("should display fallback when throw error in event handler", async () => {
  jest.spyOn(console, "error").mockImplementation(() => {})
  const user = userEvent.setup()
  const Component = () => {
    const { throwError } = useThrowError()
    return (
      <button
        type="button"
        onClick={() => {
          throwError(new Error("something event error"))
        }}
      >
        click me
      </button>
    )
  }
  render(
    <ErrorBoundary fallback={() => <p>error</p>}>
      <Component />
    </ErrorBoundary>
  )
  const btn = screen.getByRole("button")
  await user.click(btn)
  expect(screen.getByText("error")).toBeInTheDocument()
  expect(btn).not.toBeInTheDocument()
})

it("should call onError prop", () => {
  jest.spyOn(console, "error").mockImplementation(() => {})
  const onError = jest.fn()
  const ThrowError = () => {
    throw new Error("something error")
  }
  render(
    <ErrorBoundary fallback={() => <p>error</p>} onError={onError}>
      <ThrowError />
    </ErrorBoundary>
  )
  expect(onError).toHaveBeenCalled()
  expect(onError).toHaveBeenCalledWith(new Error("something error"))
})
