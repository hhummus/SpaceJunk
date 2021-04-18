// form validation //
const form = document.querySelector("#contact-form-space-junk")

const name = document.querySelector("#name");
const email = document.querySelector("#email");
const textArea = document.querySelector("#question");
const submit = document.querySelector("#submit");


form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
})

function checkInputs(){
    const userNameValue = name.value.trim();
    const emailValue = email.value.trim();
    const questionValue = question.value.trim();

    if(userNameValue === ''){
        //show error
        name.style.border = '1px solid red';
    } else{
        //show success
        name.style.border = '1px solid blue';
    }

    if(emailValue === ''){
        //show error
        email.style.border = '1px solid red';
    } else if(!isEmail(emailValue)){
        email.style.border = '1px solid red';
    }
    else{
        //show success
        email.style.border = '1px solid blue';
       
    }
    if(questionValue === ''){
        //show error
        question.style.border = '1px solid red';
    } else{
        //show success
        question.style.border = '1px solid blue';
    }
}

function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}
