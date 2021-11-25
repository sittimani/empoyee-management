import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private headingBehavior: BehaviorSubject<string>
  public headingBehavior$: Observable<string>

  constructor() {
    this.headingBehavior = new BehaviorSubject<string>("No Heading")
    this.headingBehavior$ = this.headingBehavior.asObservable()
  }

  setHeader(heading: string) {
    this.headingBehavior.next(heading)
  }
}
