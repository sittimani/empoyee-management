import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() headers!: string[]
  @Input() items: any = []

  @Input() isDeleteOption = false
  @Input() isViewOption = false
  @Input() noHeading = false
  @Output() deleteEvent = new EventEmitter<number>()
  @Output() viewEvent = new EventEmitter<number>()

  heading!: string 
  isHide = false

  constructor(private router: Router, private dataService: DataService) {
    this.dataService.headingBehavior$.subscribe(heading => {
      this.heading = heading
    })
  }

  ngOnInit(): void { }

  delete(index: number) {
    this.deleteEvent.emit(index)
  }

  viewData(index: number) {
    this.router.navigate(["somewhere"])
    this.viewEvent.emit(index)
  }
}
