({
    handleComponentEvent : function(component, event) {
        var message = event.getParam("message");

        //Set Handler attribute based on event data

        component.set("v.messageFromEvent", message)
    }
})
