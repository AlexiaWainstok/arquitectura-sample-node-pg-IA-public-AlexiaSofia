import BaseService from './base-service.js';
import AlumnosRepository from '../repositories/alumnos-repository.js';
import CursosService from './cursos-service.js';
import FechasHelper from '../helpers/fechas-helper.js';

export default class AlumnosService extends BaseService {

    constructor() {
        console.log('Estoy en: AlumnosService.constructor()');
        super(new AlumnosRepository());
        this.CursosService = new CursosService();
    }

    getAllAsync = async () => {
        console.log(`AlumnosService.getAllAsync()`);

        const returnArray = await this.repository.getAllAsync();

        if (returnArray == null) return null;

        return returnArray.map(alumno => FechasHelper.agregarEdad(alumno));
    }

    getByIdAsync = async (id) => {
        console.log(`AlumnosService.getByIdAsync(${id})`);

        const returnEntity = await this.repository.getByIdAsync(id);

        return FechasHelper.agregarEdad(returnEntity);
    }

    // resto del código...
}