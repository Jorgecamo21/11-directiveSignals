import { Component, signal } from '@angular/core';
import { Data } from '../../interfaces/user-request.interface';

@Component({
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.css',
})
export class PropertiesPageComponent {
  public data = signal<Data>({
    id: 2,
    email: 'janet.weaver@reqres.in',
    first_name: 'Janet',
    last_name: 'Weaver',
    avatar: 'https://reqres.in/img/faces/2-image.jpg',
  });

  onFieldUpdated(field: keyof Data, value: string): void {
    this.data.update((current) => {
      switch (field) {
        case 'email':
          current.email = value;
          break;

        case 'first_name':
          current.first_name = value;
          break;

        case 'last_name':
          current.last_name = value;
          break;
      }

      return current;
    });
  }
}
