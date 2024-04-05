import { Component, signal } from '@angular/core';

interface MenuItem {
  title:string;
  route:string;
}

@Component({
  selector:'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {
  public menuItems=signal<MenuItem[]>([
    {title:'Contador' , route:'counter'},
    {title:'Mutaciones' , route:'properties'},
    {title:'Usuario' , route:'info'}
  ]);
// public menuItems:MenuItem[] = [
//   {title:'Contador' , route:'counter'},
//   {title:'Mutaciones' , route:'properties'},
//   {title:'Usuario' , route:'info'}
// ]
}
