export function css(shadowRoot: ShadowRoot, url: string) {
    ;(async () => {
      await fetch(url)
        .then(async response => await response.text())
        .then(css => {
          const styleElem = document.createElement('style')
          styleElem.textContent = css
          shadowRoot.appendChild(styleElem)
        })
    })()
  }