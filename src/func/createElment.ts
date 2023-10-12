interface ElementOptions {
    id?: string
    tagName: keyof HTMLElementTagNameMap |'c-button' |'copy-code' |'draggable-box'
    classList?: string[]
    style?: Partial<CSSStyleDeclaration>
    textContent?: string
    onClick?: (event: MouseEvent) => void
    innerHTML?: string
    attributes?: Array<{ name: string, value: string }>
    change?: (event: Event) => void
    contextmenu?: (event: MouseEvent) => void
  }
  
  export function createElements (options: ElementOptions): HTMLElement {
    const {
      tagName,
      id,
      classList,
      style,
      textContent,
      onClick,
      innerHTML,
      attributes,
      change,
      contextmenu,
    } = options
  
    let element: HTMLElement | null = null
  
    if (id) {
      element = document.getElementById(id)
    }
  
    if (!element) {
      element = document.createElement(tagName)
    }
  
    if (id) {
      element.setAttribute('id', id)
    }
  
    if (classList) {
      element.classList.add(...classList)
    }
    if (style) {
      Object.assign(element.style, style)
    }
    if (textContent) {
      element.textContent = textContent
    }
    if (innerHTML) {
      element.innerHTML = innerHTML
    }
    if (onClick) {
      element.addEventListener('click', onClick)
    }
    if (attributes) {
      for (const attrObj of attributes) {
        element.setAttribute(attrObj.name, attrObj.value)
      }
    }
    if (change) {
      element.addEventListener('change', change)
    }
    if (contextmenu) {
      element.addEventListener('contextmenu', contextmenu)
    }
  
    // vérifier si l'élément a un parent avant de le remplacer
    if (element.parentElement && element.parentElement.contains(element)) {
      element.parentElement.replaceChild(element, element)
    } else {
      // si l'élément n'est pas dans le DOM, l'ajouter
      document.body.appendChild(element)
    }
  
    return element
  }