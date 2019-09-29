import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

/**
   * @description Obtém o titulo da modal
   */
  @Input() Title: string;

  constructor() { }

  ngOnInit() {
  }

}
