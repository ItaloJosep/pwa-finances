import { Injectable } from "@angular/core";
import { DatabaseHelperService } from './_database_helper.service';

@Injectable()
export class CategoriasService extends DatabaseHelperService {

    constructor() {
        super()
    }

    get(isReceita, success, error) {
        this.db.transaction((tx) => {
            var categorias = []

            tx.executeSql(`SELECT * FROM categorias where isReceita = ${isReceita}`, [], (tx, rs) => {
                if(rs.rows.length > 0) {
                    for (var x =0; x < rs.rows.length; x++) {
                        var categoria = {
                            id: rs.rows.item(x).id,
                            name: rs.rows.item(x).name                        
                        }

                        categorias.push(categoria)
                    }
                } 
                success(categorias);
            });
        }, error);
    };
    
    Seed() {
        this.db.transaction((tx) => {
            tx.executeSql(`INSERT INTO categorias (Id, name, color, icon, isReceita) VALUES (1, 'Alimentação', '#145827', '', 0);`);
            tx.executeSql(`INSERT INTO categorias (Id, name, color, icon, isReceita) VALUES (2, 'Aluguel', '#145827', '', 0);`);
            tx.executeSql(`INSERT INTO categorias (Id, name, color, icon, isReceita) VALUES (3, 'Academia', '#145827', '', 0);`);
            tx.executeSql(`INSERT INTO categorias (Id, name, color, icon, isReceita) VALUES (4, 'Condomínio', '#145827', '', 0);`);
            tx.executeSql(`INSERT INTO categorias (Id, name, color, icon, isReceita) VALUES (5, 'Cartão de crédito', '#145827', '', 0);`);
            tx.executeSql(`INSERT INTO categorias (Id, name, color, icon, isReceita) VALUES (6, 'Conta de água', '#145827', '', 0);`);
            tx.executeSql(`INSERT INTO categorias (Id, name, color, icon, isReceita) VALUES (7, 'Conta de luz', '#145827', '', 0);`);
            tx.executeSql(`INSERT INTO categorias (Id, name, color, icon, isReceita) VALUES (8, 'Despesas da casa', '#145827', '', 0);`);
            tx.executeSql(`INSERT INTO categorias (Id, name, color, icon, isReceita) VALUES (9, 'Despesas de automoveis', '#145827', '', 0);`);
            tx.executeSql(`INSERT INTO categorias (Id, name, color, icon, isReceita) VALUES (10, 'Supermercado', '#145827', '', 0);`);
            tx.executeSql(`INSERT INTO categorias (Id, name, color, icon, isReceita) VALUES (11, 'Transporte', '#145827', '', 0);`);
            tx.executeSql(`INSERT INTO categorias (Id, name, color, icon, isReceita) VALUES (12, 'Outras', '#145827', '', 0);`);

            tx.executeSql(`INSERT INTO categorias (Id, name, color, icon, isReceita) VALUES (13, 'Trabalho', '#145827', '', 1);`);
            tx.executeSql(`INSERT INTO categorias (Id, name, color, icon, isReceita) VALUES (14, 'Venda', '#145827', '', 1);`);
            tx.executeSql(`INSERT INTO categorias (Id, name, color, icon, isReceita) VALUES (15, 'Freelancer', '#145827', '', 1);`);
            tx.executeSql(`INSERT INTO categorias (Id, name, color, icon, isReceita) VALUES (16, 'Investimento', '#145827', '', 1);`);
            tx.executeSql(`INSERT INTO categorias (Id, name, color, icon, isReceita) VALUES (17, 'Aluguel', '#145827', '', 1);`);


        });
    }

}