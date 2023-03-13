export const createElement = (parentNode: HTMLElement | null, tagName = 'div', classList = '', content = '') => {
    const element = document.createElement(tagName);
    element.classList.add(classList);
    element.textContent = content;
    if (parentNode) {
      parentNode.append(element);
    }
  
    return element;
  };
  
  // функция для автоматизации создания объектов