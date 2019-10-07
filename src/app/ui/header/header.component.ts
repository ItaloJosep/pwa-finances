import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  /**
  * @description Obtém o titulo da tela
  */
  @Input() Title: string;

  /**
  * @description Obtém o titulo da tela
  */
 @Input() isMenu: number;


 @Output() onClickMenu: EventEmitter<any> = new EventEmitter();

 @Output() onClickBack: EventEmitter<any> = new EventEmitter();

  constructor(
    private chRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
   
  }

  goBack() {
    this.onClickBack.emit()
  }

  goMenu() {
    this.onClickMenu.emit()
  }

}
