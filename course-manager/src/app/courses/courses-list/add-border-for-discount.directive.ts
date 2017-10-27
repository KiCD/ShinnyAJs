import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appAddBorderForDiscount]'
})
export class AddBorderForDiscountDirective implements OnInit {
  ngOnInit(): void {
    console.log("custom directive is constructed",this.borderColor,this.discount);
    if(this.discount>15)
    {
      this.el.nativeElement.style.border=`2px solid ${this.borderColor}`;
    }
  }
  @Input() borderColor:string;
  @Input() discount:number;
  constructor(private el:ElementRef) {
    
   }



}
