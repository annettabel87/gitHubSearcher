import { IRepository } from "./components/repositories/repository";

class Store {
    private store: IRepository[] = [];

    addData(data: IRepository[]) {
        this.store = data;
    };

    getStore(){
        return this.store;
    };
    
}


export const globalStore = new Store();