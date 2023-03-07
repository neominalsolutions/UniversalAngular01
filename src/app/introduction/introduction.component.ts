import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css'],
})
export class IntroductionComponent {
  title: string = 'AngularDay1';
  visible: boolean = false;
  display: boolean = true;
  city: string = 'izmir';
  // property binding

  // public get content() {
  //   return 'content1';
  // }

  /**
   *
   */
  constructor(private titleService: Title, private meta: Meta) {
    // tarayıcıdan tabların title değiştirmemizi sağlayan angular servis
  } // DI service Injection // servisler private ve public olarak erişebilir. public arayüzden de erişilir.

  onClick(): void {
    // method
    // event binding
    this.title = 'App Component';
    this.titleService.setTitle('App Component TS');
    this.meta.addTag({ content: 'angular app' });
  }
}
