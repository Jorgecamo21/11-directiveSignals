import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit{

  private elementoHtml? : ElementRef<HTMLElement>;
  private _color = 'red';
  private _errors?:ValidationErrors | null;

  @Input()

 set color (value:string) {
    this._color=value;
    this.setNewColor();
  }

  @Input() set errors(value:ValidationErrors | null | undefined){
    this._errors = value;
    this.setErrorMessage();
  }
  constructor( private el:ElementRef<HTMLElement>) {

    this.elementoHtml=el;
  }
  ngOnInit(): void {
    this.setNewColor();
  }

  setNewColor():void{
    if (!this.elementoHtml) return;
    this.elementoHtml!.nativeElement.style.color = this._color;
  }

  setErrorMessage():void{
    if(!this.elementoHtml) return;

    if(!this._errors) {
      this.elementoHtml.nativeElement.innerHTML=''
      return;
    }

    const errors = Object.keys(this._errors);

    if (errors.includes('required')) {
      this.elementoHtml.nativeElement.innerHTML="Este campo es requerido";
      return;
    }
    else if(errors.includes('minlength')){
      this.elementoHtml.nativeElement.innerHTML="Minimo tiene que tener 6 caracteres";
      return;
    }

    else if (errors.includes('email')){
      this.elementoHtml.nativeElement.innerHTML="No cumple con el requisito de email";
      return;
    }
  }

}
