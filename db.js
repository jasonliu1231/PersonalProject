const { Pool } = require("pg");

//連接PG資料庫
async function connectpgdb() {
    let pool = new Pool({
        user: 'lssrxfuu',
        host: 'john.db.elephantsql.com',
        database: 'lssrxfuu',
        password: 'J_LIm4N9teC5CkLdH7lVXWL6sQHMiRqU',
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