({
    handleMessage: function (component, event, helper) {
        var message = event.getParams();
        component.set('v.messageFromJSApp', message.payload);
        console.log("message recieved: " + message.payload);
    },

    handleError: function (component, event, helper) {
        var error = event.getParams();
        console.log(error);
    }
})