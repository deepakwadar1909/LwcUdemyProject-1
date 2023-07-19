/*({
	ParentCompOfApplicationEvent : function(component, event, helper) {
		//You can get the event using event name
        var exAppEvent = $A.get("e.c:ExampleApplicationEvent");
        // Set here event attribute value
        exAppEvent.setParams({"Text" : "Welcome to"});
        exAppEvent.fire();
	}
})*/

({
    fireAppEvent : function(component, event, helper) {
        var appEvent = $A.get('e.c:ExampleApplicationEvent');
        appEvent.setParams({"Text":"From Parent Component : Hey, Have an Awesome Day!"});
        appEvent.fire();
    }
})