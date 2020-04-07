import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input() quote: Quote;
  @Output() isDone = new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.isDone.emit(complete);
  }
  // quoteDelete(read:boolean){
  //   this.isDone.emit(read);
  // }
  // upvote(){
  //   this.quote.upvote = this.quote.upvote +1;
  // }
  // downvote(){
  //   this.quote.downvote = this.quote.downvote + 1;
  // }
  constructor() { }
  ngOnInit() {
  }
}
