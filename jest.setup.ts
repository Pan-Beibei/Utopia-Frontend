import "@testing-library/jest-dom";
import "jest-styled-components";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import zhTranslation from "./public/locales/zh/translation.json";

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

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

i18n.use(initReactI18next).init({
  resources: {
    zh: {
      translation: zhTranslation,
    },
  },
  load: "languageOnly",
  lng: "zh",
  fallbackLng: "zh",
  interpolation: {
    escapeValue: false,
  },
});
