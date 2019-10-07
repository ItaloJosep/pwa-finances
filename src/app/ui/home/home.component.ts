import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { TotalMoneyModel } from 'src/app/model/totals_money.model';
import { OperationMoneyService } from 'src/app/services/operation_money.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = "Minhas Finanças"

  listItensExpense: any[]
  listItensIncome: any[]

  chartTotal = 0
  sizeLegend = 0 
  chartValuesArray: Array<TotalMoneyModel> = []
  chartValues: string = null

  constructor(
    private router: Router,
    private OperationMoneyService: OperationMoneyService,
    private chRef: ChangeDetectorRef,
  ) { 
    this.getChart()     
    this.getExpense()
    this.getIncome()
  }

  ngOnInit() {
  }

  fabClick() {
    this.router.navigate(['/register'])
  }

  private getIncome() {
    this.OperationMoneyService.get(true, success => {
      this.listItensIncome = success

      this.chRef.detectChanges()
    }, error => {})
  }

  private getExpense() {
    this.OperationMoneyService.get(false, success => {
      this.listItensExpense = success

      this.chRef.detectChanges()
    }, error => {})
  }

  private getChart() {
    this.OperationMoneyService.getChart(response => {
      this.chartValuesArray.push(new TotalMoneyModel(response.despesas, "#E64C65", "Despesas"))
      this.chartValuesArray.push(new TotalMoneyModel(response.receita, "#0FA954", "Receita"))
      this.chartTotal = response.total

      if(response.despesas > 0 && response.receita > 0) {
        this.sizeLegend = 50
      } else {
        this.sizeLegend = 100
      }

      this.chartValues = JSON.stringify(this.chartValuesArray)
      this.chRef.detectChanges()
    }, error => {})
  }

  private onClickMenu() {

  }

}