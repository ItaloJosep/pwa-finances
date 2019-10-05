import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Componentes
import { AppComponent } from './app/app.component';
import { DonutChartComponent } from './ui/donut-chart/donut-chart.component';
import { FabMoreComponent } from './ui/fab-more/fab-more.component';
import { HeaderComponent } from './ui/header/header.component';
import { HomeComponent } from './ui/home/home.component';
import { ItemListHomeComponent } from './ui/item-list-home/item-list-home.component';

// Routes
import { appRoutes } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DonutChartComponent,
    FabMoreComponent,
    HeaderComponent,
    HomeComponent,
    ItemListHomeComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent, HomeComponent]
})
export class AppModule { }
