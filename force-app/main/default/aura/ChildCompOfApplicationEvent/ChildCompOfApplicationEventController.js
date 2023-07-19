/*({
	ChildApplicationEvent : function(component, event, helper) {
		//You can get the event text attribute here
		var text = event.getParam("Text");
        
        // Set here event attribute handler values
        component.set("v.eventText", Text + ' World!');
	}
})*/

({
    ChildApplicationEvent : function(component, event, helper) {
        var msg = event.getParam("Text");
        console.log('msg' + msg);
        component.set("v.eventText", msg);
    }
})