import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data.service';
import { EventsService } from '../../shared/service/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  headers: string[] = ["name", "date", "time", "duration"]
  items: any[] = []

  noHeading = true

  constructor(private events: EventsService, private dataService: DataService) {
    // this.dataService.setHeader()
  }

  ngOnInit(): void {
    this.items = this.events.getEvents()
  }

}
