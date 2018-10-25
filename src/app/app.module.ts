import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DeptosComponent } from './pages/deptos/deptos.component';
import { InitComponent } from './pages/init/init.component';
import { TareasComponent } from './pages/tareas/tareas.component';
import { PropsComponent } from './pages/props/props.component';
import { CalidadComponent } from './pages/calidad/calidad.component';
import { ComentsComponent } from './pages/coments/coments.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    DeptosComponent,
    InitComponent,
    TareasComponent,
    PropsComponent,
    CalidadComponent,
    ComentsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
