import { createElement } from "../../helpers/control";
import './repositories.scss';

const repository = createElement(null, 'div', 'repository');

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
export const user = createElement(null, 'div', 'users__item');