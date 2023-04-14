import mysql from 'serverless-mysql';

export const db = mysql({
    config: {
        host: 'localhost',
        port: 8889,
        user: 'root',
        database: 'task_mate_dt',
        password: 'root'
      }
});
