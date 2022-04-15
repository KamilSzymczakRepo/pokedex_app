import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICard } from '../models/card';



@Injectable({
    providedIn: 'root'
})

export class Worker {
    private cards: any = []
    private spinnerBS = new BehaviorSubject<boolean>(false);
    private loginBS = new BehaviorSubject<boolean>(false);
    private cardsBS = new BehaviorSubject<ICard[]>([])
    private listsBS = new BehaviorSubject<ICard[]>([])
    private buttonBS = new BehaviorSubject<string>("");


    constructor() { }

    getSpinnerBehavior() {
        return this.spinnerBS;
    }

    getLoginBehavior() {
        return this.loginBS;
    }

    getCardsBehavior() {
        return this.cardsBS;
    }

    getListsBehavior() {
        return this.listsBS;
    }

    getButtonBehavior() {
        return this.buttonBS;
    }

    getCards() {
        return this.cards;
    }

    setCards(cards: any) {
        this.cards = cards;
    }

    filterByName(name: string): void {
        const copyCard = [...this.cards];
        const result = this.cards.filter((pokemon: any) => pokemon.name.includes(name));
        this.cardsBS.next(result)
        this.listsBS.next(result)
        this.cards = copyCard;
    }

    clearFilter(){
        this.cardsBS.next(this.cards)
        this.listsBS.next(this.cards)
    }


}