import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-list-home',
  templateUrl: './item-list-home.component.html',
  styleUrls: ['./item-list-home.component.css']
})
export class ItemListHomeComponent implements OnInit {

  /**
  * @description Obtém o titulo do item
  */
  @Input() Title: string

  /**
  * @description Obtém o preço
  */
  @Input() Price: string
  
  /**
  * @description Obtém a cor da tag
  */
  @Input() TagColor: string

  /**
  * @description Obtém a cor do avatar
  */
  @Input() AvatarColor: string

  constructor() { }

  ngOnInit() {
  }

}
