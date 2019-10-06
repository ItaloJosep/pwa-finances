import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Componentes
import { AppComponent } from './app/app.component';
import { DonutChartComponent } from './ui/donut-chart/donut-chart.component';
import { FabMoreComponent } from './ui/fab-more/fab-more.component';
import { HeaderComponent } from './ui/header/header.component';
import { HomeComponent } from './ui/home/home.component';
import { ItemListHomeComponent } from './ui/item-list-home/item-list-home.component';
import { RegisterComponent } from './ui/register/register.component';


// Routes
import { appRoutes } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DonutChartComponent,
    FabMoreComponent,
    HeaderComponent,
    HomeComponent,
    ItemListHomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent, HomeComponent]
})
export class AppModule { }
