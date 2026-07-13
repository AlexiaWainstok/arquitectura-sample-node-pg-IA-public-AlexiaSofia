// [IA] Refactorizado para utilizar BaseService y eliminar código duplicado.
// [YO] Revisé que respetara la arquitectura del proyecto y el mismo flujo de llamadas al Repository.

import BaseService from './base-service.js';
import CalificacionesRepository from '../repositories/calificaciones-repository.js';

export default class CalificacionesService extends BaseService {

    constructor() {
        console.log('Estoy en: CalificacionesService.constructor()');
        super(new CalificacionesRepository());
    }

}