import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TotalMoneyModel } from 'src/app/model/totals_money.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = "Minhas Finanças"

  listItens = [
    {
      title: "Academia",
      price: "60,00",
      tagColor: "#6f42c1",
      avatarColor: "#6f42c1"
    },{
      title: "Academia",
      price: "60,00",
      tagColor: "#6c757d",
      avatarColor: "#6c757d"
    },{
      title: "Academia",
      price: "60,00",
      tagColor: "#20c997",
      avatarColor: "#20c997"
    },{
      title: "Academia",
      price: "60,00",
      tagColor: "#ffc107",
      avatarColor: "#ffc107"
    },{
      title: "Academia",
      price: "60,00",
      tagColor: "#dc3545",
      avatarColor: "#dc3545"
    },
  ]

  chartTotal = 130.00
  chartValuesArray: Array<TotalMoneyModel> = []
  chartValues: string

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.chartValuesArray.push (new TotalMoneyModel(80, "#E64C65", "Comida"))
    this.chartValuesArray.push (new TotalMoneyModel(10, "#11A8AB", "Comida"))
    this.chartValuesArray.push (new TotalMoneyModel(13, "#4FC4F6", "Comida"))
    this.chartValuesArray.push (new TotalMoneyModel(10, "#4FC4F6", "Comida"))
    this.chartValuesArray.push (new TotalMoneyModel(17, "#FCB150", "Comida"))

    this.chartValues = JSON.stringify(this.chartValuesArray)
  }

  fabClick() {
    console.log("click fab")
  }

}