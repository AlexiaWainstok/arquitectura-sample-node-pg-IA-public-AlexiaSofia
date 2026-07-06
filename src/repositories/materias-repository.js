// [IA] Archivo generado a partir del patrón de cursos-repository.js con ayuda de IA.
// [YO] Revisé que respetara la arquitectura del proyecto.

import Db from './db-pg.js';

export default class MateriasRepository {
    constructor() {
        console.log('Estoy en: MateriasRepository.constructor()');
        this.db = new Db();
    }
// [IA] Método CRUD generado siguiendo el patrón existente.
    getAllAsync = async () => {
        console.log(`MateriasRepository.getAllAsync()`);
        const sql = `SELECT * FROM materias`;
        return await this.db.queryAll(sql);
    }
// [IA] Método CRUD generado siguiendo el patrón existente.
    getByIdAsync = async (id) => {
        console.log(`MateriasRepository.getByIdAsync(${id})`);
        const sql = `SELECT * FROM materias WHERE id=$1`;
        return await this.db.queryOne(sql, [id]);
    }
// [IA] Método CRUD generado siguiendo el patrón existente.
    createAsync = async (entity) => {
        console.log(`MateriasRepository.createAsync(${JSON.stringify(entity)})`);
        const sql = `INSERT INTO materias (nombre) VALUES ($1) RETURNING id`;
        const values = [entity?.nombre ?? ''];
        return await this.db.queryReturnId(sql, values);
    }
// [IA] Método CRUD generado siguiendo el patrón existente.
    updateAsync = async (entity) => {
        console.log(`MateriasRepository.updateAsync(${JSON.stringify(entity)})`);
        const sql = `UPDATE materias SET nombre = $2 WHERE id = $1`;
        const values = [
            entity.id,
            entity?.nombre ?? ''
        ];
        return await this.db.queryRowCount(sql, values);
    }
// [IA] Método CRUD generado siguiendo el patrón existente.
    deleteByIdAsync = async (id) => {
        console.log(`MateriasRepository.deleteByIdAsync(${id})`);
        const sql = `DELETE FROM materias WHERE id=$1`;
        return await this.db.queryRowCount(sql, [id]);
    }
}