import * as React from "react";

type Props = {};

interface LocalState {
  hasError: boolean;
  error?: unknown;
}

class ErrorBoundary extends React.Component<Props, LocalState> {
  public state: Readonly<LocalState>;

  constructor(props: Props) {
    // cf. https://github.com/jhusain/eslint-plugin-immutable/issues/16
    /* eslint-disable immutable/no-mutation */
    super(props);

    this.state = {
      hasError: false,
    };
    /* eslint-enable immutable/no-mutation */
  }

  public static getDerivedStateFromError(error: unknown) {
    return {
      hasError: true,
      error,
    };
  }

  public componentDidCatch(error: unknown, info: unknown) {
    console.error({ error, info }); // eslint-disable-line no-console
  }

  public render() {
    if (this.state.hasError) {
      if (this.state.error instanceof Error) {
        return this.state.error.stack;
      }

      throw new TypeError(`${this.state.error} is not an error.`);
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
