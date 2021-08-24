import {app} from 'electron';
import path  from 'path';
import fs from 'fs';
import bs3 from 'better-sqlite3';
//import sqlite3, {RunResult} from 'sqlite3';

  
export async function  GetDBs() : Promise<string[] | NodeJS.ErrnoException> {
      return new Promise((resolve, reject) => {
          const dbs : string[] = [];
              fs.readdir(path.join(app.getPath('userData'), 'db'), function (err, files) {
          
              path.join(app.getPath('userData'), 'db');
          //	console.log(files);
              if (err) {
          //		console.log(err);
                  reject(err);
              }
  
              files.forEach(file => {
                  dbs.push(file);
              });
          resolve(dbs);
        })
      })
  }
  
  export function CreateDB(dbName: string) : boolean  {
  
    //	By default, it uses the OPEN_READWRITE | OPEN_CREATE mode. It means that if the database does not exist, the new database will be created and is ready for read and write.
    
    // default is OPEN_READWRITE | OPEN_CREATE
      dbName += ".db";
      const aPath = path.join(app.getPath('userData'), 'db', (dbName));
      const db : bs3.Database = new bs3(aPath);

      try {
        db.exec(
          `CREATE TABLE IF NOT EXISTS Department (
            pk_DepartmentId integer NOT NULL CONSTRAINT Department_pk PRIMARY KEY,
            Name varchar(50) NOT NULL
          );  
          
          CREATE TABLE IF NOT EXISTS Employee (
            pk_EmployeeId integer NOT NULL CONSTRAINT Employee_pk PRIMARY KEY,
            Name varchar(30) NOT NULL,
            fk_DepartmentId integer,
            DeleteIndicator integer,
            CONSTRAINT Employee_Department FOREIGN KEY (fk_DepartmentId)
            REFERENCES Department (pk_DepartmentId)
          );

          CREATE TABLE IF NOT EXISTS Shift (
            pk_ShiftId integer NOT NULL CONSTRAINT Shift_pk PRIMARY KEY,
            Start datetime NOT NULL,
            "End" datetime NOT NULL,
            fk_EmployeeId integer NOT NULL,
            CONSTRAINT Shift_Employee FOREIGN KEY (fk_EmployeeId)
            REFERENCES Employee (pk_EmployeeId)
          );  `

        )
      }
      catch (err) {
        console.log(err);
        return false;
      }
    db.close();
    return true;
}
  
 export  async function DeleteDB(dbName: string) : Promise<boolean> {
  
      dbName += ".db";
      const aPath = path.join(app.getPath('userData'), 'db', (dbName));
      return new Promise((resolve, reject) => {
          try {
              fs.unlink(aPath, (err) => {
                  if (err) console.log(err);
              })
              resolve(true)
          }
          catch(err) {
              console.log(err);
              reject(false);
          }
      })
}
  

  
  
 export  async function RenameDB(paths: string[]) : Promise<boolean> {
  
  const oldPath = path.join(app.getPath('userData'), 'db', (paths[0]));
  let newPath = path.join(app.getPath('userData'), 'db', (paths[1]));
  newPath += ".db";
  
  return new Promise((resolve, reject) => {
    try {
        fs.rename(oldPath, newPath, (err) => {
          if (err) console.log(err + " @@RenameDB at fs.rename");
        })
        resolve(true)
    }
    catch (err) {
        console.log(err + " @@RenameDB at catch")
    }
    reject(false);
  })
}