Step 1:
The first step involves converting all form elements into controlled components. Since the pieces of local state have been already defined at the top of the component, you just have to assign each state piece to the value prop from each input element. To be able to account for state updates, each input should also define the onChange prop and call the state setter with the value property from the event target as parameter.

The password input is a special case that has an object as state instead of a string. As a result, the state setter should spread the previous values so they don’t get overridden. Finally, to make sure the password characters are obscured, you need to use the type “password” for the input.

Step 2:
The isTouched property on the password state was defined to determine when the input was touched at least once. In order to listen for interactions, form inputs have two additional events you can subscribe to: onFocus and onBlur.

In this scenario, you need to use the onBlur event, which is called whenever the input loses focus, so that guarantees the user has interacted with the password input at least once. In that event, you should set the isTouched property to true with the password state setter.

Then, the condition to display the error message relies on that value being true and a check on the password length to see if it’s less than 8 characters long. If the condition is true, the component PasswordErrorMessage should be rendered. The final code should be as follows:

onBlur = {()=> {
setPassword({...password, isTouched: true });
}}
{password.isTouched && password.value.length < 8
? (<PasswordErrorMessage />)
: null
}

step 3:
To prevent the default behavior of the form when clicking on the submit button, you have to call preventDefault on the event object, right in your submit handler function.

const handleSubmit = (e) => {
e.preventDefault();
alert("Account created!");
clearForm();
};

step 4:
To fulfil the validation rules of the form, the body of the getIsFormValid function should be implemented as below:

const getIsFormValid = () => {
return (
firstName &&
validateEmail(email) &&
password.value.length >= 8 &&
role !== "role"
);
};

step 5:
Finally, to clear the form state after a successful submission, you should set each piece of state to its initial value:
const clearForm = () => {
setFirstName("");
setLastName("");
setEmail("");
setPassword({
value: "",
isTouched: false,
});
setRole("role");
};
