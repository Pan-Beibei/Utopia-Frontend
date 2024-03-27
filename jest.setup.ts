import "@testing-library/jest-dom";
import "jest-styled-components";

class MockIntersectionObserver {
  constructor(
    public callback: IntersectionObserverCallback,
    public options?: IntersectionObserverInit
  ) {}

  observe() {
    return null;
  }

  disconnect() {
    return null;
  }

  unobserve() {
    return null;
  }

  takeRecords() {
    return [];
  }

  root = null;
  rootMargin = "";
  thresholds = [0];
}

global.IntersectionObserver = MockIntersectionObserver;
