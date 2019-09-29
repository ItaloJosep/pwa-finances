import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  fabClick() {
    console.log("click fab")
  }

}