// [IA] Archivo generado a partir del patrón de cursos-repository.js con ayuda de IA.
// [YO] Revisé que respetara la arquitectura del proyecto.

import Db from './db-pg.js';

export default class CalificacionesRepository {
    constructor() {
        console.log('Estoy en: CalificacionesRepository.constructor()');
        this.db = new Db();
    }

    // [IA] Método CRUD generado siguiendo el patrón existente.
    getAllAsync = async () => {
        console.log(`CalificacionesRepository.getAllAsync()`);
        const sql = `SELECT * FROM calificaciones`;
        return await this.db.queryAll(sql);
    }

    // [IA] Método CRUD generado siguiendo el patrón existente.
    getByIdAsync = async (id) => {
        console.log(`CalificacionesRepository.getByIdAsync(${id})`);
        const sql = `SELECT * FROM calificaciones WHERE id=$1`;
        return await this.db.queryOne(sql, [id]);
    }

    // [IA] Método CRUD generado siguiendo el patrón existente.
    createAsync = async (entity) => {
        console.log(`CalificacionesRepository.createAsync(${JSON.stringify(entity)})`);
        const sql = `
            INSERT INTO calificaciones (id_alumno, id_materia, nota, fecha)
            VALUES ($1, $2, $3, $4)
            RETURNING id
        `;

        const values = [
            entity?.id_alumno ?? 0,
            entity?.id_materia ?? 0,
            entity?.nota ?? 0,
            entity?.fecha ?? null
        ];

        return await this.db.queryReturnId(sql, values);
    }

    // [IA] Método CRUD generado siguiendo el patrón existente.
    updateAsync = async (entity) => {
        console.log(`CalificacionesRepository.updateAsync(${JSON.stringify(entity)})`);

        const sql = `
            UPDATE calificaciones
            SET id_alumno=$2,
                id_materia=$3,
                nota=$4,
                fecha=$5
            WHERE id=$1
        `;

        const values = [
            entity.id,
            entity?.id_alumno ?? 0,
            entity?.id_materia ?? 0,
            entity?.nota ?? 0,
            entity?.fecha ?? null
        ];

        return await this.db.queryRowCount(sql, values);
    }

    // [IA] Método CRUD generado siguiendo el patrón existente.
    deleteByIdAsync = async (id) => {
        console.log(`CalificacionesRepository.deleteByIdAsync(${id})`);
        const sql = `DELETE FROM calificaciones WHERE id=$1`;
        return await this.db.queryRowCount(sql, [id]);
    }
}