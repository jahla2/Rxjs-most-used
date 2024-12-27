import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { filter, map, of } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Rxjs';

  users = [
    { id: '1', name: 'Reynand', isActive: true },
    { id: '2', name: 'Dariel', isActive: true },
    { id: '3', name: 'Marex', isActive: true },
  ];

  users$ = of(this.users);
  usernames$ = this.users$.pipe(map((users) =>  users.map((users) => users.name)));

  //filter to get active user only
  filteredUsers$ = this.users$.pipe(filter((users)=> users.every(users => users.isActive)));

  ngOnInit(): void {
    // this.users$.subscribe(users => {
    //   console.log('users', users)
    // });
  }
}
