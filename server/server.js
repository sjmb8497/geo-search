import express, { Router } from 'express';
import fetch from 'node-fetch';
import { db } from './database.js';

export function Server() {
  const app = express();
  //const router= Router();
  
  app.use(express.json());
  
  app.get('/locations', async (req, res) => {
    console.log('sophia')
    const queryString = req.query.q;
    console.log('queryString', queryString)

    if (queryString.length > 1) {
        console.log('here')
        const sql = `SELECT name
        FROM locations
        WHERE name LIKE '${queryString}%'
        ORDER BY length(name) asc`;
    
        db.all(sql, [], (error, rows) => {
          if (error) {
              throw error;
          }
    
          const data = rows.map((row) => row.name);
          res.json(data);
        })
        } else {
            console.log('sophia2')
            res.status(500).send(null);
        }
    })

//   app.use('/', router);
  return app;
}

function initServer() {
  const port = Number(process.env.PORT) || 4000;
  const server = Server();

  server.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
}

initServer()
