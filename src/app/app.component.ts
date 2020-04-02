import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes :Quote []= [
   new Quote (1,"The greatest glory in living lies not in never falling, but in rising every time we fall.","Author-Nelson Mandela","Nelson",new Date(2020,3,14)),
   new Quote  (2,"The way to get started is to quit talking and begin doing.","Author -Walt Disney",  "Walt",new Date(2020,3,14)),
   new Quote  (3,"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.","Author-Steve Jobs","Jobs",new Date(2020,3,14)),
   new Quote  (4,"If life were predictable it would cease to be life, and be without flavor.","Author-Elenor Roosevelt","Roosevelt",new Date(2020,3,14)),
   new Quote  (5,"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.","Author -Ophrah Winfrey","Winfrey",new Date(2020,3,14)),
   new Quote  (6,"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.","Author-James cameron","Cameron",new Date(2020,3,14)),
   new Quote (7,"Life is what happens when you are busy making other plans.","Author-John Lennon","Lennon",new Date(2020,3,14))
  ];
 
}