import sqlite3 from "sqlite3";
import md5 from "md5";

const DBSOURCE = "./server/GBlocations.db"

export const db = new sqlite3.Database(DBSOURCE, sqlite3.OPEN_READONLY, (err) => {
    if (err) {
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to database.')
    }
});