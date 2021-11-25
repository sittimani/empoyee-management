import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() headers!: string[]
  @Input() items: any = []

  @Input() isDeleteOption = false
  @Output() deleteEvent = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  delete(index: number) {
    this.deleteEvent.emit(index)
  }

}
