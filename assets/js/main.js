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
    this.util = new Util();
  }

  initHighlight() {
    this.util.forEach(
      document.querySelectorAll(".highlight-wrapper"),
      (chrome) => {
        console.log("code", chrome.querySelectorAll("code"));
        const codeElement = chrome.querySelectorAll("code")[0];

        const button = chrome.getElementsByClassName(
          "highlight-copy-button"
        )[0];
        const code = codeElement.innerText;
        console.log(button);
        button.setAttribute("data-clipboard-text", code);
        const clipboard = new ClipboardJS(button);
        clipboard.on("success", (_e) => {
          console.log("success", _e);
          this.util.animateCSS(codeElement, "animate__flash");
        });
      }
    );
  }

  init() {
    try {
      this.initHighlight();
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
