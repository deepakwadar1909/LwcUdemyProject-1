({
    handleSubmit : function(component, event, helper) {
        //Find components and get value using component.find()
        var fNameCmp = component.find("fName");
        var lNameCmp = component.find("lName");

        console.log('First Name : ' + fNameCmp.get("v.value"));
        console.log();
    }
})
