function parseProjection(projection) {
  switch (projection.type) {
    case "not":
      return (selector) => !matches(selector, projection.selector);
    case "has":
      return (selector) => matches(selector, projection.selector);
    // ...
  }
}
