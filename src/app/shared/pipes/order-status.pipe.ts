import { Pipe, PipeTransform } from '@angular/core';

export enum OrderStatusEnum {
  Submitted = 100,
  Shipped = 101,
  Completed = 102,
}

@Pipe({
  name: 'orderStatus',
})
export class OrderStatusPipe implements PipeTransform {
  transform(value: number): unknown {
    if (value == OrderStatusEnum.Submitted) return 'Submitted';
    else if (value == OrderStatusEnum.Shipped) return 'Shipped';
    else if (value == OrderStatusEnum.Completed) return 'Completed';

    return null;
  }
}
