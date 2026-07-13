// [IA] Refactorizado para utilizar BaseRepository y eliminar código duplicado.
// [YO] Revisé que respetara la arquitectura del proyecto.

import BaseRepository from './base-repository.js';

export default class MateriasRepository extends BaseRepository {

    constructor() {
        console.log('Estoy en: MateriasRepository.constructor()');
        super("materias");
    }

    // [IA] Método CRUD generado siguiendo el patrón existente.
    createAsync = async (entity) => {
        console.log(`MateriasRepository.createAsync(${JSON.stringify(entity)})`);

        const sql = `INSERT INTO materias (nombre)
                     VALUES ($1)
                     RETURNING id`;

        const values = [
            entity?.nombre ?? ''
        ];

        return await this.db.queryReturnId(sql, values);
    }

    // [IA] Método CRUD generado siguiendo el patrón existente.
    updateAsync = async (entity) => {
        console.log(`MateriasRepository.updateAsync(${JSON.stringify(entity)})`);

        const id = entity.id;

        const previousEntity = await this.getByIdAsync(id);
        if (previousEntity == null) return 0;

        const sql = `UPDATE materias
                     SET nombre = $2
                     WHERE id = $1`;

        const values = [
            id,
            entity?.nombre ?? previousEntity.nombre
        ];

        return await this.db.queryRowCount(sql, values);
    }
}