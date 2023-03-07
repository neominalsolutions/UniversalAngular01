import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  // component içerisine dışarıdan attribute olarak geçilen parametreler.
  // Input Output decorator
  @Input() text!: string;
  @Input() bgColor!: string;

  @Output() clicked: EventEmitter<void> = new EventEmitter<void>();

  onClick() {
    this.clicked.emit(); // ben click oldum. eventi fırlatma kısmı
  }
}
