import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BehaviorSubject, combineLatest, filter, fromEvent, map, of } from 'rxjs';

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

  //Behaviour Stream -> stream varable for user
  user$ = new BehaviorSubject<{id: string; name: string} | null>(null) 

  users$ = of(this.users);
  usernames$ = this.users$.pipe(map((users) =>  users.map((users) => users.name)));

  //filter to get active user only
  filteredUsers$ = this.users$.pipe(filter((users)=> users.every(users => users.isActive)));

  //Combine streams to single stream of data
  data$ = combineLatest([
    this.users$,
    this.usernames$,
    this.filteredUsers$,
  ]).pipe(
    map(([user,usernames,filteredUsers]) => ({
      user,
      usernames,
      filteredUsers,
    }))
  )

  //Events
  //documentClick$ = fromEvent(document, 'click');

  ngOnInit(): void {



    // this.documentClick$.subscribe((e) => {
    //   console.log('e', e);
    // })

    // setTimeout(() => {
    //   //update behaviour subject
    //   this.user$.next({id: '1', name: "Jhon"});
    // }, 2000);

    // this.user$.subscribe((user) => {
    //   console.log('user', user);
    // });

    // this.users$.subscribe(users => {
    //   console.log('users', users)
    // });
  }
}
