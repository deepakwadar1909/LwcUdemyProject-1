({
    fireComponentEvent : function(component, event, helper) {
        //Get the event using registerEvent name
        var cmpEvent = component.getEvent("cmpEvent");
        cmpEvent.setParams({"Message" })
    }
})
