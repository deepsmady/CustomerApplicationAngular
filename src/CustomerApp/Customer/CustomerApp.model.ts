import{
    NgForm,
    FormGroup,
    FormControl,
    Validators,
    FormBuilder
} from '@angular/forms'

//1.Create: Create the Validation Object Model
export class Customer {
    CustomerCode : string = "";
    CustomerName : string = "";
    CustomerAmount : number = 0;
    formCustomerGroup : FormGroup;
    constructor(){
        var _builder = new FormBuilder();
        this.formCustomerGroup = _builder.group({});
        //Control --> Validation
        this.formCustomerGroup.addControl("CustomerNameControl", new FormControl('',Validators.required));
        

        //CustomerCode Control --> Required, 4 letter numeric
        var validationCollection = [];
        validationCollection.push(Validators.required);
        validationCollection.push(Validators.pattern("^[0-9]{4,4}$"));
        this.formCustomerGroup.addControl("CustomerCodeControl",new FormControl('',Validators.compose(validationCollection)));
    }
}