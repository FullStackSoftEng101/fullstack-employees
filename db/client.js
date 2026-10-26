import pg from "pg";
const db = new pg.Client(process.env.DATABASE_URL);
//console.debug(db);
export default db;
