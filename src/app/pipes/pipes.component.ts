import { Component } from '@angular/core';

// https://www.angularjswiki.com/angular/angular-date-pipe-formatting-date-times-in-angular-with-examples/

export type Status = {
  value: string | number | undefined; // union type
};

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent {
  // pipe angularda html veya ts de transform yani veri manipule etme işlemleri için kullanılır

  // value | pipeName (union type)

  order: any = {
    orderDate: new Date(1990, 11, 17, 15, 30),
    status: 100, // 100 submitted 102 shipped 103 completed (custom pipe)
    cost: 1500, // currency pipe ve number pipe
    firstname: 'ALI', // lowercase
    lastname: 'can', // uppercase
  };
}
