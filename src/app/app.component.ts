import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes :Quote []= [
  {id:1,name:"The greatest glory in living lies not in never falling, but in rising every time we fall.",quoteby: "Author-Nelson Mandela",uploadby: "Nelson",completeDate: new Date(2020,3,14)},
  {id:2,name:"The way to get started is to quit talking and begin doing.",quoteby: "Author -Walt Disney",uploadby: "Walt",completeDate:new Date(2020,3,14)},
  {id:3,name:"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",quoteby: "Author-Steve Jobs", uploadby:"Jobs",completeDate:new Date(2020,3,14)},
  {id:4,name:"If life were predictable it would cease to be life, and be without flavor.",quoteby: "Author-Elenor Roosevelt",uploadby: "Roosevelt",completeDate:new Date(2020,3,14)},
  {id:5,name:"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",quoteby: "Author -Ophrah Winfrey",uploadby: "Winfrey",completeDate:new Date(2020,3,14)},
  {id:6,name:"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",quoteby: "Author by-James cameron",uploadby: "Cameron",completeDate:new Date(2020,3,14)},
  {id:7,name:"Life is what happens when you are busy making other plans.",quoteby: "Author-John Lennon", uploadby:"Lennon",completeDate:new Date(2020,3,14)}
];
 
}