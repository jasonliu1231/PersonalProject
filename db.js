const { Pool } = require("pg");

//連接PG資料庫
async function connectpgdb() {
    let pool = new Pool({
        user: process.env.sa_user,
        host: process.env.sa_host,
        database: process.env.sa_database,
        password: process.env.sa_password,
        port: "5432"
    });
    try {
        const client = await pool.connect();
        return client;
    } catch (err) {
        pool.end();
        throw `錯誤訊息：${err}`;
    }
}

module.exports = {
    connectpgdb: connectpgdb
};