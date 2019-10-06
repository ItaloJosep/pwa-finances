import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/services/categorias.service';
import { OperationMoneyModel } from 'src/app/model/operation_money.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    
  receita: boolean = true;
  despesa: boolean = false;
  
  avista: boolean = true;
  parcelado: boolean = false;

  operationMoney = new OperationMoneyModel()

  categoryExpense: any[]
  categoryIncome: any[]
  constructor(
    private CategoriaService: CategoriasService
  ) { 
    this.dropDownCategoryExpense()
    this.dropDownCategoryIncome()
  }

  ngOnInit() {
    
  }

  template = false;
  pagamento = true;

  dropDownCategoryExpense() {
    this.CategoriaService.get(false, (result: any[]) => {
      this.categoryExpense = result;
      console.log(this.categoryExpense)
    }, () => {

    })
  }

  dropDownCategoryIncome() {
    this.CategoriaService.get(true, (result: any[]) => {
      this.categoryIncome = result
      console.log(this.categoryIncome)
    }, () => {

    })
  }

}
