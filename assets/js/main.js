class Util {
  forEach(elements, handler) {
    elements = elements || [];
    for (let i = 0; i < elements.length; i++) handler(elements[i]);
  }

  getScrollTop() {
    return (
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop
    );
  }

  isMobile() {
    return window.matchMedia("only screen and (max-width: 680px)").matches;
  }

  isTocStatic() {
    return window.matchMedia("only screen and (max-width: 960px)").matches;
  }

  animateCSS(element, animation, reserved, callback) {
    if (!Array.isArray(animation)) animation = [animation];
    element.classList.add("animate__animated", ...animation);
    const handler = () => {
      element.classList.remove("animate__animated", ...animation);
      element.removeEventListener("animationend", handler);
      if (typeof callback === "function") callback();
    };
    if (!reserved) element.addEventListener("animationend", handler, false);
  }
}

class Theme {
  constructor() {
    this.config = window.config;
    // this.data = this.config.data;
    // this.isDark = document.body.getAttribute("theme") === "dark";
    this.util = new Util();
    this.newScrollTop = this.util.getScrollTop();
    this.oldScrollTop = this.newScrollTop;
    this.scrollEventSet = new Set();
    this.resizeEventSet = new Set();
    this.switchThemeEventSet = new Set();
    this.clickMaskEventSet = new Set();
    if (window.objectFitImages) objectFitImages();
  }

  init() {
    try {
    } catch (err) {
      console.error(err);
    }

    window.setTimeout(() => {}, 100);
  }
}

const themeInit = () => {
  const theme = new Theme();
  theme.init();
};

if (document.readyState !== "loading") {
  themeInit();
} else {
  document.addEventListener("DOMContentLoaded", themeInit, false);
}
