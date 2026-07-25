const baseLocale = "en";
const locales = ["en", "zh-cn"];

let _locale = baseLocale;

function getLocale() {
  return _locale;
}

function setLocale(newLocale, _options) {
  _locale = newLocale;
  if (typeof document !== "undefined") {
    document.documentElement.lang = newLocale;
  }
}

function localizeUrl(url, _options) {
  return url;
}

function extractLocaleFromUrl(_url) {
  return _locale;
}

function extractLocaleFromRequest(_request) {
  return _locale;
}

function extractLocaleFromCookie(_request) {
  return _locale;
}

function extractLocaleFromHeader(_request) {
  return _locale;
}

export {
  baseLocale,
  locales,
  getLocale,
  setLocale,
  localizeUrl,
  extractLocaleFromUrl,
  extractLocaleFromRequest,
  extractLocaleFromCookie,
  extractLocaleFromHeader,
};
