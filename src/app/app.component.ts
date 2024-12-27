import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { map, of } from 'rxjs';

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

  
  // converts data to a stream
  // strem of user
  users$ = of(this.users);

  // use operation in pipe
  // stream of user->name from user
  usernames$ = this.users$.pipe(map((users) =>  users.map((users) => users.name)));

  ngOnInit(): void {
    // this.users$.subscribe(users => {
    //   console.log('users', users)
    // });
  }
}
