import { DatabaseHelperService } from './_database_helper.service';
import { Injectable } from '@angular/core';

@Injectable()
export class OperationMoneyService extends DatabaseHelperService {
    constructor() {
        super()
    }

    post(operationMoney, success, error) {
        this.db.transaction((tx) => {
            var query = `INSERT INTO operationMoney (isIncome, money, categoryId, isCashPayment, amountInstallments) VALUES (${operationMoney.isIncome},${operationMoney.money},${operationMoney.categoryId},${operationMoney.isCashPayment},${operationMoney.amountInstallments})`
            tx.executeSql(query, [], (tx, rs) => { 
                
            }, error, success)
            }, error, success);
    }

    get(isIncome, success, error) {
        this.db.transaction((tx) => {
            var operations = []

            tx.executeSql(`SELECT category.name, category.color, om.Id, om.categoryId, om.money FROM operationMoney om INNER JOIN category category ON om.categoryId = category.Id
            where isIncome = ${isIncome}`, [], (tx, rs) => {
                if(rs.rows.length > 0) {
                    for (var x =0; x < rs.rows.length; x++) {
                        var operation = {
                            id: rs.rows.item(x).Id,
                            title: rs.rows.item(x).name,
                            price: rs.rows.item(x).money,
                            tagColor: rs.rows.item(x).color                    
                        }

                        operations.push(operation)
                    }
                } 
                success(operations);
            });
        }, error);
    }

    getChart(success, error) {
        this.db.transaction((tx)=> {
            var chart = {
                despesas : 0,
                receita: 0,
                total: 0,
            }

            tx.executeSql(`select  categoryId, Sum(money)money from operationMoney group by categoryId`, [], (tx, rs) => {
                if(rs.rows.length > 0) {
                    for (var x =0; x < rs.rows.length; x++) { 
                        if(rs.rows.item(x).categoryId<13) {
                            chart.despesas += rs.rows.item(x).money
                        } else {
                            chart.receita += rs.rows.item(x).money
                        }
                        chart.total += rs.rows.item(x).money
                    }
                }

                success(chart)
            })

        }, error)
    }
    
}