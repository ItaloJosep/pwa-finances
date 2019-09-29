import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';


// Componentes
import { AppComponent } from './app/app.component';
import { HomeComponent } from './ui/home/home.component';

// Routes
import { appRoutes } from './app-routing.module';
import { HeaderComponent } from './ui/header/header.component';
import { FabMoreComponent } from './ui/fab-more/fab-more.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FabMoreComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent, HomeComponent]
})
export class AppModule { }
