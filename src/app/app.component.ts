import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { of } from 'rxjs';

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


  //converts data to a stream
  users$ = of(this.users);

  ngOnInit(): void {
    // this.users$.subscribe(users => {
    //   console.log('users', users)
    // });
  }
}
