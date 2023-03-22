import { Component } from "react";

export class ErrorBoundary extends Component {
  state = { hasError: false, error: null };

  componentDidCatch(error) {
    this.setState({ hasError: true, error });
  }

  render() {
    const { hasError, error } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <div>
          <p>Oops! An unexpected error ocurred</p>
          {error.toString()}
        </div>
      );
    }
    return children;
  }
}
