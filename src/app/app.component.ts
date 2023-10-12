import { Component } from '@angular/core';
import { Observable, from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs-test';

  testArray = [
    {title: "test title1", description: "test description 1"},
    {title: "test title2", description: "test description 2"},
    {title: "test title3", description: "test description 3"}
  ]

  promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Resolving the promise...done!')
    }, 3000)
  })

  ArrayObservable$ = from(this.testArray);
  PromiseObservable$ = from(this.promise);

  constructor() {

    this.ArrayObservable$.subscribe({
      next: (data) => console.log(data),
      error: (error) => console.log(error),
      complete: () => console.log("Done!")
    });

    this.PromiseObservable$.subscribe({
      next: (data) => console.log(data),
      error: (error) => console.log(error),
      complete: () => console.log("Ok done")
    })
  }
}
