import DbPg from "./db-pg.js";

export default class BaseRepository {
    constructor(tabla) {
        this.db = new DbPg();
        this.tabla = tabla;
    }

    getAllAsync = async () => {
        const sql = `SELECT * FROM ${this.tabla}`;
        return await this.db.queryAll(sql);
    }

    getByIdAsync = async (id) => {
        const sql = `SELECT * FROM ${this.tabla} WHERE id = $1`;
        return await this.db.queryOne(sql, [id]);
    }

    deleteByIdAsync = async (id) => {
        const sql = `DELETE FROM ${this.tabla} WHERE id = $1 RETURNING *`;
        return await this.db.queryOne(sql, [id]);
    }
}