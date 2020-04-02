import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input() quote: Quote;
  @Output() isDone = new EventEmitter<boolean>();

  quoteDone(complete:boolean){
    this.isDone.emit(complete);
  }
  constructor() { }

  ngOnInit() {
  }

}
