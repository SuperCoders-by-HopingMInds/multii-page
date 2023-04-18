

let form = document.querySelector('form');


form.addEventListener("submit", validateForm)

let signUp_data = []


function validateForm(event){
    console.log("hello world")
     event.preventDefault(); 
     
    let name = document.querySelector('#name');
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    let confirm_password = document.querySelector('#confirm_password');

     // all values are present: 

     if(!name.value || !email.value || !password.value || !confirm_password.value){
        alert("All fields are required")
        return
     }

     if(name.value.trim().indexOf(" ") == -1){
        alert("Name must be full name")
        return
     }

     if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 || email.value.indexOf("@") > email.value.lastIndexOf("."))
     {
        alert("Email is invalid")
        return
     }

     if (passwordValidate(password.value, name.value, email.value) == false){
        alert("Password is invalid")
        return
     }

     if(password.value != confirm_password.value){
         alert("Password does not match")
     }

    let sameuser = signUp_data.filter(user => user.email == email.value)

    if(sameuser.length > 0){
        alert("Email already exists")
        return
    }

    let user_data = {
        name: name.value,
        email: email.value,
        password: password.value,
    }

    signUp_data.push(user_data)


    // console.log(signUp_data)

    // convert array to json 
    let data = JSON.stringify(signUp_data)

    /// add json to local storage
    localStorage.setItem('user_data', data)

    // redirect to login page 
    alert("Account created successfully")
    window.location.href = "./pages/login.html"

}



function passwordValidate(password, name, email){
    let num = 0
    let upper = 0
    let lower = 0
    let special = 0

    for(let t of password){
        if(t >= 0 && t <= 9){
            num++
        }else if(t >= "A" && t <= "Z"){
            upper++
        }else if(t >= "a" && t <= "z"){
            lower++
        }else{
            special++
        }
    }

    return num>=1 && upper>=1 && lower>=1 && special>=1 && password !=name && password != email
     
}