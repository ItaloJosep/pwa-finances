import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    
  receita: boolean = false;
  despesa: boolean = true;

  avista: boolean = true;
  parcelado: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  template = false;
  pagamento = true;

}
