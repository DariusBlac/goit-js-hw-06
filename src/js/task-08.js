const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', formControl);

function formControl(event) {
    event.preventDefault();
    
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === '' || password.value === '') {
        return alert('All fields must be completed');
    } else {
        const formObj = {
            email: email.value,
            password: password.value,
        };
        console.log(formObj);
        event.currentTarget.reset();
    };
}
