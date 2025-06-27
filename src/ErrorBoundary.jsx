import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return <h1>Xatolik yuz berdi. Iltimos, keyinroq urinib ko‘ring.</h1>
    }
    return this.props.children
  }
}