import { searchBlock } from './components/searchBlock/searchBlock';
import { repositories } from './components/repositories/repositories';
import { createElement } from './helpers/control';
import './global.scss';

window.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.body;
    const app = createElement(rootElement, 'div', 'app');
    const mainBlock = createElement(app, 'main', 'main');
    mainBlock.append(searchBlock, repositories)
    app.append( mainBlock);
  });