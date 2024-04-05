import {  Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    templateUrl: './productsPage.component.html',
    styleUrl: './productsPage.component.css'
})
export class ProductsPageComponent  {

  private fb = inject( FormBuilder);

  public color :string = 'green';

  public myForm : FormGroup = this.fb.group(
    {
      name: ['', [Validators.required, Validators.minLength(6), Validators.email]]
    }
  );

  changeColor():void{
    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color =color;
  }

  // constructor (private fb:FormBuilder) {}

}
