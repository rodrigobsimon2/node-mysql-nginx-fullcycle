import mysql from 'mysql';
import mysqlConfig from './mysql-config.js';

export default function queryNames() {
    return new Promise((resolve, reject) => {
        const connection = mysql.createConnection(mysqlConfig);
        const query_sql = `SELECT name FROM people;`;

        connection.query(query_sql, (error, results) => {
            if (error) {
                connection.end();
                return reject(error);
            }

            const result = results.map(row => row.name);
            connection.end();

            resolve(result);
        });
    });
}