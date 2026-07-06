// [IA] Archivo generado a partir del patrón de materias-service.js con ayuda de IA.
// [YO] Revisé que respetara la arquitectura del proyecto y el mismo flujo de llamadas al Repository.

import CalificacionesRepository from '../repositories/calificaciones-repository.js';

export default class CalificacionesService {
    constructor() {
        console.log('Estoy en: CalificacionesService.constructor()');
        this.CalificacionesRepository = new CalificacionesRepository();
    }

    // [IA] Método generado siguiendo el patrón existente.
    getAllAsync = async () => {
        console.log(`CalificacionesService.getAllAsync()`);
        const returnArray = await this.CalificacionesRepository.getAllAsync();
        return returnArray;
    }

    // [IA] Método generado siguiendo el patrón existente.
    getByIdAsync = async (id) => {
        console.log(`CalificacionesService.getByIdAsync(${id})`);
        const returnEntity = await this.CalificacionesRepository.getByIdAsync(id);
        return returnEntity;
    }

    // [IA] Método generado siguiendo el patrón existente.
    createAsync = async (entity) => {
        console.log(`CalificacionesService.createAsync(${JSON.stringify(entity)})`);
        const newId = await this.CalificacionesRepository.createAsync(entity);
        return newId;
    }

    // [IA] Método generado siguiendo el patrón existente.
    updateAsync = async (entity) => {
        console.log(`CalificacionesService.updateAsync(${JSON.stringify(entity)})`);
        const rowsAffected = await this.CalificacionesRepository.updateAsync(entity);
        return rowsAffected;
    }

    // [IA] Método generado siguiendo el patrón existente.
    deleteByIdAsync = async (id) => {
        console.log(`CalificacionesService.deleteByIdAsync(${id})`);
        const rowsAffected = await this.CalificacionesRepository.deleteByIdAsync(id);
        return rowsAffected;
    }
}