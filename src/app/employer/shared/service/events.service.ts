import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private events = [
    {
      name: "quiz",
      date: "26-Nov-2021",
      time: "09:00Am",
      duration: "15 Minutes"
    }
  ]

  constructor() { }

  getEvents() {
    return this.events
  }
}
