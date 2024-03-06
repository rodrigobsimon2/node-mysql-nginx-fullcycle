import mysql from 'mysql';
import mysqlConfig from './mysql-config.js';

export default function insertName(name) {
    const connection = mysql.createConnection(mysqlConfig);
    const insert_sql = `INSERT INTO people(name) values('${name}')`;
    connection.query(insert_sql);
    connection.end();
}
