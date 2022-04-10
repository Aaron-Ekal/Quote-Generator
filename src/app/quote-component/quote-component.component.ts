import { Quote } from '../quote';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-quote-component',
  templateUrl: './quote-component.component.html',
  styleUrls: ['./quote-component.component.scss']
})
export class QuoteComponentComponent implements OnInit {

  arrayQuotes:Quote[] = [
    new Quote('You only live ONCE, so make the most out of it', 'Aaron Ekal', 'Nalah Sumbua'),
    new Quote('You get what you give. So give more than you can give', 'Bugs Bunny', 'Elmer Fudd'),
    new Quote('Understand that coding is not knowing what you are knowing not what you know', 'Pogrey kiogothe', 'Prof Maji Marefu'),
    new Quote('Once you enter the gate of no gate, you will find what you are looking.', 'Anonymous', 'Chinese Proverb')
  ]

  deleteQuote(del:any,index:number) {
    if (del) {
      this.arrayQuotes.splice(index,1)
    }
  }

  addLike(newLike:any, index:number) {
    if (newLike) {
      this.arrayQuotes[index].likes += 1
    }
  }

  addDislike(newDislike:any, index:number) {
    if (newDislike) {
      this.arrayQuotes[index].dislikes += 1
    }
  }

  newQuote(quoteNew:any) {
    this.arrayQuotes.push(quoteNew)
  }


  constructor() { }

  ngOnInit(): void {
  }

}
