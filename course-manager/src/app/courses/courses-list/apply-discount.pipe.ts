import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'applyDiscount'
})
export class ApplyDiscountPipe implements PipeTransform {

  transform(value: number, discount: number): number {
    console.log("price: ",value," discount: ",discount);
    return value - (value * discount / 100);
  }

}
