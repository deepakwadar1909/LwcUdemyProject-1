({
    handleSubmit : function(component, event, helper) {
        //Find components and get value using component.find()
        var fNameCmp = component.find("fName");
        var lNameCmp = component.find("lName");

        console.log('First Name : ' + fNameCmp.get("v.value"));
        console.log('Last Name : ' + lNameCmp.get("v.value"));

        //Get attribute value using component.get()
        var fNameAttValue = component.get("v.firstName");
        var lNameAttValue = component.get("v.lastName");

        console.log('First Name : ' + fNameAttValue);
        console.log('Last Name : ' + lNameAttValue);
    }
})