import { createElement } from "../../helpers/control";
import './repositories.scss';

export  const createRepository = (data: IRepository) => {
    const repository = createElement(null, 'div', 'repository');    

    const labelName = createElement(repository, 'span', 'repository__tex-bold', 'Название: ');
    const name = createElement(repository, 'a', 'repository__link', data.name) as HTMLAnchorElement;
    name.href = data.html_url;
    name.setAttribute('target', '_blank');  

    const userBlock = createElement(repository, 'div', 'repository__block');
    const labelUser = createElement(userBlock, 'span', 'repository__tex-bold', 'Владелец: ');
    const avatar = createElement(userBlock, 'img', 'repository__img') as HTMLImageElement;
    avatar.src = data.owner.avatar_url;
    const user = createElement(userBlock, 'span', 'repository__text', data.owner.login);

    const descriptionBlock = createElement(repository, 'div', 'repository__block');
    const labelDescription = createElement(descriptionBlock, 'span', 'repository__tex-bold', 'Описание: ');
    const description = createElement(descriptionBlock, 'span', 'repository__text', data.description);

    const labelPrivate = createElement(repository, 'span', 'repository__tex-bold', 'Приватность: ');
    const isPrivate = createElement(repository, 'span', 'repository__text', data.private ? 'приватный' : 'публичный');
    return repository;
}


export interface IRepository {    
    id: number,
    node_id: string,
    name: string,
    full_name: string,
    private: boolean,
    owner: {
        login: string,
        id: number,
        node_id: string,
        avatar_url: string,
        gravatar_id: string
        url: string,
        html_url: string,        
        repos_url: string,       
        type: "User",
        site_admin: boolean                   
    }
    html_url: string,
    description: string,
    fork: boolean,
    url: string,
    created_at: "2015-02-25T04:47:49Z",
    updated_at: "2023-03-09T04:21:10Z",
    pushed_at: "2017-09-05T13:34:31Z",
}
