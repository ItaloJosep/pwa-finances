import { Injectable } from "@angular/core";
import { DatabaseHelperService } from './_database_helper.service';

@Injectable()
export class CategoryService extends DatabaseHelperService {

    constructor() {
        super()
    }

    get(isReceita, success, error) {
        this.db.transaction((tx) => {
            var category = []

            tx.executeSql(`SELECT * FROM category where isReceita = ${isReceita}`, [], (tx, rs) => {
                if(rs.rows.length > 0) {
                    for (var x =0; x < rs.rows.length; x++) {
                        var categoria = {
                            id: rs.rows.item(x).Id,
                            name: rs.rows.item(x).name                        
                        }

                        category.push(categoria)
                    }
                } 
                success(category);
            });
        }, error);
    };
    
    Seed() {
        this.db.transaction((tx) => {
            tx.executeSql(`INSERT INTO category (Id, name, color, isReceita) VALUES (1, 'Alimentação', '#E64C65', 0);`);
            tx.executeSql(`INSERT INTO category (Id, name, color, isReceita) VALUES (2, 'Aluguel', '#E64C65', 0);`);
            tx.executeSql(`INSERT INTO category (Id, name, color, isReceita) VALUES (3, 'Academia', '#E64C65', 0);`);
            tx.executeSql(`INSERT INTO category (Id, name, color, isReceita) VALUES (4, 'Condomínio', '#E64C65', 0);`);
            tx.executeSql(`INSERT INTO category (Id, name, color, isReceita) VALUES (5, 'Cartão de crédito', '#E64C65', 0);`);
            tx.executeSql(`INSERT INTO category (Id, name, color, isReceita) VALUES (6, 'Conta de água', '#E64C65', 0);`);
            tx.executeSql(`INSERT INTO category (Id, name, color, isReceita) VALUES (7, 'Conta de luz', '#E64C65', 0);`);
            tx.executeSql(`INSERT INTO category (Id, name, color, isReceita) VALUES (8, 'Despesas da casa', '#E64C65', 0);`);
            tx.executeSql(`INSERT INTO category (Id, name, color, isReceita) VALUES (9, 'Despesas de automoveis', '#E64C65', 0);`);
            tx.executeSql(`INSERT INTO category (Id, name, color, isReceita) VALUES (10, 'Supermercado', '#E64C65', 0);`);
            tx.executeSql(`INSERT INTO category (Id, name, color, isReceita) VALUES (11, 'Transporte', '#E64C65', 0);`);
            tx.executeSql(`INSERT INTO category (Id, name, color, isReceita) VALUES (12, 'Outras', '#E64C65', 0);`);

            tx.executeSql(`INSERT INTO category (Id, name, color, isReceita) VALUES (13, 'Trabalho', '#145827', 1);`);
            tx.executeSql(`INSERT INTO category (Id, name, color, isReceita) VALUES (14, 'Venda', '#145827', 1);`);
            tx.executeSql(`INSERT INTO category (Id, name, color, isReceita) VALUES (15, 'Freelancer', '#145827', 1);`);
            tx.executeSql(`INSERT INTO category (Id, name, color, isReceita) VALUES (16, 'Investimento', '#145827', 1);`);
            tx.executeSql(`INSERT INTO category (Id, name, color, isReceita) VALUES (17, 'Aluguel', '#145827', 1);`);


        });
    }

}