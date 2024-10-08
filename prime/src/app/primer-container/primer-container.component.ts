import { Component, numberAttribute, OnInit } from '@angular/core';

@Component({
  selector: 'app-primer-container',
  standalone: true,
  imports: [],
  templateUrl: './primer-container.component.html',
  styleUrl: './primer-container.component.css'
})
export class PrimerContainerComponent implements OnInit{


  currentNumber : number = 2;

  ngOnInit(): void {
    console.log(this.isPrime(6))

  }

  getNextNumber(primeNumber : number){
    let currentNumberToCheck : number = ++primeNumber;

    while(!this.isPrime(currentNumberToCheck))  currentNumberToCheck++;
    return currentNumberToCheck;
  }

  getPreviousNumber(primeNumber : number){
    if (primeNumber === 2) return primeNumber;
    let currentNumberToCheck : number = --primeNumber;

    while(!this.isPrime(currentNumberToCheck))  currentNumberToCheck--;
    return currentNumberToCheck;
  }

  isPrime (num : number) : boolean {
    for (let i = num - 1; i > 1; i --)
      if(num % i == 0) return false
    return true;
  }

  forwardNumber(event : MouseEvent) : void {
    event.preventDefault(); //prevent browser menu
    console.log('right click');
    this.currentNumber = this.getNextNumber(this.currentNumber);
  }

  backwardNumber() : void {
    console.log('left click');
    this.currentNumber = this.getPreviousNumber(this.currentNumber);

  }

}
