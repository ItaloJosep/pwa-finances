import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StartDatabaseService } from '../services/_start-database.service';
import { CategoriasService } from '../services/categorias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  
  constructor(
    private router: Router,
    private StartDatabaseService: StartDatabaseService,
    private CategoriaService: CategoriasService
  ) {
    this.StartDatabaseService.StartOfflineDB();
    this.CategoriaService.Seed();
  }

  ngOnInit(): void {
    this.router.navigate(['home'])
  }

  title = 'finance-app';
}
