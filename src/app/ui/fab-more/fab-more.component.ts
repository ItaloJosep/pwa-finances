import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fab-more',
  templateUrl: './fab-more.component.html',
  styleUrls: ['./fab-more.component.css']
})
export class FabMoreComponent implements OnInit {

  /**
  * @description Retorna o item selecionado
  */
  @Output() onClick: EventEmitter<any> = new EventEmitter();
  
  isActive = false

  constructor() { }

  ngOnInit() {
  }

  fabClick(){
    this.isActive = true;

    this.onClick.emit()
  }

}
