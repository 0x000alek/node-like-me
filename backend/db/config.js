import pg from 'pg'
import 'dotenv/config'

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env

const pool = new pg.Pool({
    host:DB_HOST,
    port:DB_PORT,
    user:DB_USER,
    password:DB_PASSWORD,
    database:DB_DATABASE,
    allowExitOnIdle: true
})

pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('Database connection error:', err)
    } else {
        console.log('Database connected successfully:', res.rows[0])
    }
})

export default pool