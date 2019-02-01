({
    handleMessage: function (component, event, helper) {
        var message = event.getParams();

	//We have to account for padding and margin.  There are many ways to go about this.
        component.set('v.lccHeight',  (message.payload[0] + 40) + "px");
        component.set('v.lccWidth',  (message.payload[1] + 40) + "px");
    },

    handleError: function (component, event, helper) {
        var error = event.getParams();
        console.log(error);
    }
})