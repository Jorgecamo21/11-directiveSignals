import { Component, OnInit, inject, signal } from '@angular/core';
import { UsersServiceService } from '../../services/users-service.service';
import { Data } from '../../interfaces/user-request.interface';

@Component({
  templateUrl: './user-info-page.component.html',
  styleUrl: './user-info-page.component.css'
})
export class UserInfoPageComponent implements OnInit{
ngOnInit(): void {
  this.loadUser(this.userId());
}
private usersService = inject(UsersServiceService);
public userId = signal(1);

public currentUser = signal<Data|undefined>(undefined);

public userFound = signal(true);

loadUser(id:number){
  if (id <= 0) return;
  this.userId.set(id);
  this.currentUser.set(undefined);

  this.usersService.getUserById(id)
  .subscribe({
    next:user =>{
    this.currentUser.set(user);
    this.userFound.set(true);
  },error: () => {
    this.userFound.set(false);
    this.currentUser.set(undefined);
  },})
}
}
