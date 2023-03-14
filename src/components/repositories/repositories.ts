import { globalStore } from "../../Store";
import { createElement } from "../../helpers/control";
import { createRepository } from "./repository";
import './repositories.scss';

export const repositories = createElement(null, 'div', 'repositories');

export const updateRepo = () => {
    repositories.innerHTML = '';
    globalStore.getStore().forEach(item => {
        const element = createRepository(item);
        repositories.append(element);
    })
}

updateRepo();