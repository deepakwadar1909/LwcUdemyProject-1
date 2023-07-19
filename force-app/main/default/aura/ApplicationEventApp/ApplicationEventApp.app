<aura:application extends="force:slds" >
	<!--<lightning:layout>
    	<lightning:layoutItem size="6">
            <c:ParentCompOfApplicationEvent/>
        </lightning:layoutItem>
        
        <lightning:layoutItem size="6">
            <c:ChildCompOfApplicationEvent/>
        </lightning:layoutItem>
    </lightning:layout>-->
    
    <lightning:layout>
        <lightning:layoutItem size="6">
        	<c:ParentChildAppEventContainer/>
        </lightning:layoutItem>
    </lightning:layout>
</aura:application>