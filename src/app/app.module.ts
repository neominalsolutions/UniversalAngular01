import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PipesComponent } from './pipes/pipes.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { DatePipe, registerLocaleData } from '@angular/common';

import localeTr from '@angular/common/locales/tr';
import { OrderStatusPipe } from './shared/pipes/order-status.pipe';
import { TextColorDirective } from './shared/directives/text-color.directive';
import { ButtonComponent } from './shared/button/button.component';

registerLocaleData(localeTr);

// declaration @NgModule decleration varsa bu class Module classtır.
@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    IntroductionComponent,
    OrderStatusPipe,
    TextColorDirective,
    ButtonComponent,
  ], // uygulamada kullanılacak olan directive,component,pipe gibi bileşenleri tanıttığımız yer
  imports: [BrowserModule, HttpClientModule], // uygulamaya tanıtalan module kısmı 3rd package npm i
  providers: [{ provide: LOCALE_ID, useValue: 'tr' }], // service tanımları buraya tanımlanır
  // uygulama genelinde tr localization uygula
  bootstrap: [AppComponent], // uygulama ilk olarak AppComponent ile sayfaya basılsın.
})
export class AppModule {} // uygulama ilk açlıdığında bu module ile start verilir.
