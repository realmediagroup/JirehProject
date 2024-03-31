import pg from 'pg'

const { Pool } = pg

let pool

function createPool() {
   const poolHost = "ep-little-sun-a4gtlo4p-pooler.us-east-1.aws.neon.tech";
   const poolName = "verceldb";
   const poolUser = "default";
   const poolPass = "jTHtaINL3cm8"
   const poolPort = "5432"

   return new Pool({
      host: poolHost,
      database: poolName,
      user: poolUser,
      password: poolPass,
      port: poolPort,
      ssl: {
         sslmode: 'require'
      }
   })
}

export function getPool() {
   if (!pool) {
      pool = createPool()
   }
   return pool
}
