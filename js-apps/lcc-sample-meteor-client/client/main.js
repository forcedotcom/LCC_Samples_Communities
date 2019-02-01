import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import * as LCC from 'lightning-container';
import { Meteor } from 'meteor/meteor';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);

  //Call LCC and do nothing
    console.log(LCC);
    LCC.callApex("ContactController.getContactsByName",
		 "",
		 (result, event) => {
		     console.log("Called VF");
		     if (event.status) {
			 console.log(result[0]);
		     } else if (event.type === "exception") {
			 console.log(event.message + " : " + event.where);
		     }
	       
		 },
		 { escape: true });
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
