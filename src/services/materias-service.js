// [IA] Archivo generado a partir del patrón de cursos-service.js con ayuda de IA.
// [YO] Revisé que respetara la arquitectura del proyecto y el mismo flujo de llamadas al Repository.

import MateriasRepository from '../repositories/materias-repository.js';

export default class MateriasService {
    constructor() {
        console.log('Estoy en: MateriasService.constructor()');
        this.MateriasRepository = new MateriasRepository();
    }

    // [IA] Método generado siguiendo el patrón existente.
    getAllAsync = async () => {
        console.log(`MateriasService.getAllAsync()`);
        const returnArray = await this.MateriasRepository.getAllAsync();
        return returnArray;
    }

    // [IA] Método generado siguiendo el patrón existente.
    getByIdAsync = async (id) => {
        console.log(`MateriasService.getByIdAsync(${id})`);
        const returnEntity = await this.MateriasRepository.getByIdAsync(id);
        return returnEntity;
    }

    // [IA] Método generado siguiendo el patrón existente.
    createAsync = async (entity) => {
        console.log(`MateriasService.createAsync(${JSON.stringify(entity)})`);
        const newId = await this.MateriasRepository.createAsync(entity);
        return newId;
    }

    // [IA] Método generado siguiendo el patrón existente.
    updateAsync = async (entity) => {
        console.log(`MateriasService.updateAsync(${JSON.stringify(entity)})`);
        const rowsAffected = await this.MateriasRepository.updateAsync(entity);
        return rowsAffected;
    }

    // [IA] Método generado siguiendo el patrón existente.
    deleteByIdAsync = async (id) => {
        console.log(`MateriasService.deleteByIdAsync(${id})`);
        const rowsAffected = await this.MateriasRepository.deleteByIdAsync(id);
        return rowsAffected;
    }
}