import * as React from "react"
import * as Sentry from "@sentry/nextjs"

type Props = {
  children: React.ReactNode
  fallback: (err: unknown) => React.ReactNode
  onError?: (err: Error) => void
}

type State = {
  cause: unknown | null
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { cause: null }
  }
  static getDerivedStateFromError(cause: unknown) {
    return { cause }
  }
  componentDidCatch(err: unknown, _info: React.ErrorInfo) {
    if (err instanceof Error) {
      this.props.onError?.(err)
      Sentry.captureException(err)
    }
  }
  render() {
    if (this.state.cause) {
      return this.props.fallback(this.state.cause)
    }
    return this.props.children
  }
}
