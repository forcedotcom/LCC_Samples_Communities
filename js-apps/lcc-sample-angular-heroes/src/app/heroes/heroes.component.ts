import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import * as LCC from 'lightning-container';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
    hero: Hero = {
        id: 1,
        name: 'Windstorm'
    };

    constructor() {
        let searchKey = "";

        console.log(LCC);
        LCC.callApex("ContactController.getContactsByName",
            searchKey,
            (result, event) => {
                if (event.status) {
		    let ind = Math.floor(Math.random() * result.length);
		    this.hero.name = result[ind].Name;
		    this.hero.id = result[ind].Id;
                } else if (event.type === "exception") {
                    console.log(event.message + " : " + event.where);
                }

            },
            { escape: true });
    }

    ngOnInit() {

    }

}
