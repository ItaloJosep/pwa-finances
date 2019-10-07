import { Component, OnInit, NgZone } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { OperationMoneyModel } from 'src/app/model/operation_money.model';
import { OperationMoneyService } from 'src/app/services/operation_money.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    
  title = "Minhas Finanças"
  receita: boolean = true;
  despesa: boolean = false;
  
  avista: boolean = true;
  parcelado: boolean = false;

  operationMoney = new OperationMoneyModel()

  categoryExpense: any[]
  categoryIncome: any[]
  constructor(
    private CategoriaService: CategoryService,
    private OperationMoneyService: OperationMoneyService,
    private router: Router,
    private ngZone: NgZone
  ) { 
    this.dropDownCategoryExpense()
    this.dropDownCategoryIncome()
    this.operationMoney.isIncome = true;
  }

  ngOnInit() {
    
  }

  template = false;
  pagamento = true;

  dropDownCategoryExpense() {
    this.CategoriaService.get(false, (result: any[]) => {
      this.ngZone.run(() => {
        this.categoryExpense = result;
      })
    }, () => {

    })
  }

  dropDownCategoryIncome() {
    this.CategoriaService.get(true, (result: any[]) => {
      this.ngZone.run(() => {
        this.categoryIncome = result
      })
    }, () => {

    })
  }

  onRegister() {
    this.OperationMoneyService.post(this.operationMoney, 
      success => {
        this.onClickBack()
        console.log("sucesso")
      }, ()=> {console.log("Erro")})

  }

  private onClickBack() {
    this.ngZone.run(() => {
      this.router.navigate(['/home'])
    })
  }

}
