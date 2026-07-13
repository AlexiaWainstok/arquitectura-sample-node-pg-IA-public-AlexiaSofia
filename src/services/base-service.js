
export default class BaseService {

    constructor(repository) {
        this.repository = repository;
    }

    getAllAsync = async () => {
        console.log(`${this.constructor.name}.getAllAsync()`);
        return await this.repository.getAllAsync();
    }

    getByIdAsync = async (id) => {
        console.log(`${this.constructor.name}.getByIdAsync(${id})`);
        return await this.repository.getByIdAsync(id);
    }

    createAsync = async (entity) => {
        console.log(`${this.constructor.name}.createAsync(${JSON.stringify(entity)})`);
        return await this.repository.createAsync(entity);
    }

    updateAsync = async (entity) => {
        console.log(`${this.constructor.name}.updateAsync(${JSON.stringify(entity)})`);
        return await this.repository.updateAsync(entity);
    }

    deleteByIdAsync = async (id) => {
        console.log(`${this.constructor.name}.deleteByIdAsync(${id})`);
        return await this.repository.deleteByIdAsync(id);
    }

}