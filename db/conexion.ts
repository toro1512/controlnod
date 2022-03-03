import { createPool } from 'mysql2/promise'
import '../config'
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_USERSDB } from '../config';

export async function connect(){
    const connection = await createPool({
        host: DB_HOST,
        user: DB_USERSDB,
        database: DB_NAME,
        password:DB_PASSWORD,
        connectionLimit: 10
    });
    
    return connection;
}
