


let form = document.querySelector('form');


let data = localStorage.getItem('user_data')
let user_data = JSON.parse(data)


form.addEventListener("submit", checkLogin)


function checkLogin(event){
    event.preventDefault()
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');

    for(let t of user_data){
        if(t.email == email.value && t.password == password.value){
            alert("login successful")
           
        }
        else{
            alert("login failed")
        }
    }
}