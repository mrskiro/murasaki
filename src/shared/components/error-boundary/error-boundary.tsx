import * as React from "react"

type Props = {
  children: React.ReactNode
  fallback: (err: unknown) => React.ReactNode
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
  componentDidCatch(error: unknown, info: React.ErrorInfo) {
    console.log("from error boundary", { error, info })
  }
  render() {
    if (this.state.cause) {
      return this.props.fallback(this.state.cause)
    }
    return this.props.children
  }
}
