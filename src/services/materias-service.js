// [IA] Refactorizado para utilizar BaseService y eliminar código duplicado.
// [YO] Revisé que respetara la arquitectura del proyecto y el mismo flujo de llamadas al Repository.

import BaseService from './base-service.js';
import MateriasRepository from '../repositories/materias-repository.js';

export default class MateriasService extends BaseService {

    constructor() {
        console.log('Estoy en: MateriasService.constructor()');
        super(new MateriasRepository());
    }

}