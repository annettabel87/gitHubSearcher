import { createElement } from "../../helpers/control";
import { IRepository } from "../repositories/repository";
import './searchBlock.scss';

const BASE_URL = 'https://api.github.com/search';

export const searchBlock = createElement(null, 'div', 'search');

const form = createElement(searchBlock,'form', 'search__form');

const searchInput = createElement(form, 'input','search__input') as HTMLInputElement;

const submitBtn = createElement(form, "button", 'search__btn') as HTMLButtonElement;
submitBtn.textContent = 'найти';
submitBtn.disabled = true;

const error = createElement(form,'p', 'error');

const progressBlock = createElement(form, 'p', 'search__text');

searchInput.addEventListener('input', () => {
    onInputHandler(searchInput, error);
});

form.addEventListener('submit', (e: SubmitEvent) => findUsers(e,  searchInput.value));

function onInputHandler(element: HTMLInputElement, errorBlock: HTMLElement) {
    const isValidly = validateForm(element.value);
    errorBlock.hidden = isValidly;
    errorBlock.innerText = 'Недостаточно символов.';
    !isValidly ? element.classList.add('invalid') : element.classList.remove('invalid');
    submitBtn.disabled = !isValidly;
}

async function findUsers(e: SubmitEvent, userName: string) {
    progressBlock.innerText = '';
    e.preventDefault();

    try {
        progressBlock.innerText = 'Загрузка...';
        const response = await fetch(`${BASE_URL}/repositories?q=${encodeURIComponent(userName)}&page=1&per_page=10`);
       
        if(!response.ok) {
            throw new Error("Что-то пошло не так, попробуйте снова...");   
        } else {
            const result = await response.json();
            if(result.total_count === 0) {
                progressBlock.innerText = 'Ничего не найдено';
            }       
            
            return result.items;             
        }           
        
    } catch (err) {
        if(err instanceof Error)
        error.innerText = err.message;       
    }
    finally {
        progressBlock.innerText = '';
    }
}

function validateForm(value:  string) {
    const searchValue = value.trim();
    if(!searchValue || searchValue.length < 3){        
        return false
    } else {        
        return true;
    }
}

interface IResponse {
  total_count: number,
  incomplete_results: boolean,
  items: IRepository[];
}
