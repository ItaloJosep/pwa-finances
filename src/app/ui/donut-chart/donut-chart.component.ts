import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { TotalMoneyModel } from 'src/app/model/totals_money.model';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css']
})
export class DonutChartComponent implements OnInit {

  /**
  * @description Obtém o lista
  */
  @Input() chartValuesString: string

  /**
  * @description Obtém o total de dinheiro
  */
  @Input() chartTotal: number

  /**
  * @description Obtém a quantidade de item
  */
  @Input() categorySize: number

  TOTAL_DEG_CHAT = 360
  chartValues: any[]

  constructor(private ref: ChangeDetectorRef) { 
    
  }

  ngOnInit() {
    let degAux = 0;

    if(this.chartValuesString) {
      this.chartValues = JSON.parse(this.chartValuesString)

      this.chartValues.sort((a,b) => {
        if(a.money > b.money)
          return 1
        else if(a.money < b.money)
          return -1
        else 
          return 0
      })
  
      if(this.chartValues.length) {
        this.chartValues.forEach((item, index) => {
          item.percentage = +Math.round((item.money/this.chartTotal)*100).toFixed(1);
    
          if(index = 0) {
            item.startChart = `rotate(${0}deg)`
          
          } else {
            item.startChart = `rotate(${degAux}deg)`
          }
    
          let sizeChart = (item.percentage/100) * this.TOTAL_DEG_CHAT
    
          if(sizeChart > 180) {
            item.sizeChart = `rotate(${180}deg)`
            degAux += 180
            this.chartValues.push ( new TotalMoneyModel(0, item.color, item.categoria, 0, `rotate(${degAux-1}deg)`, `rotate(${sizeChart - 180}deg)`))
          } else {
            item.sizeChart = `rotate(${sizeChart}deg)`
            degAux += sizeChart
    
          }
          this.ref.detectChanges();
        });
      }
      
    }
  }
}
