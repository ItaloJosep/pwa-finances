import { DatabaseHelperService } from './_database_helper.service';
import { Injectable } from '@angular/core';

@Injectable()
export class StartDatabaseService extends DatabaseHelperService { 

    db: any;
    constructor() { 
        super()
    } 

    StartOfflineDB() {
        this.db.transaction(this.CreateTable, this.ErrorCB);
    }

    private CreateTable(tx: any){
        tx.executeSql(`CREATE TABLE IF NOT EXISTS categorias (
            Id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            color TEXT,
            icon TEXT,
            isReceita NUMERIC
        )`)
    }

    private ErrorCB(err) {
        console.log(err);
    }
}