({
    handleLwcMethodCall : function(component, event, helper) {
        var name = component.get("v.name");
        var city = component.get("v.city");
        component.find('lwcChildComponent').callFromParent(name, city);
    }
})
