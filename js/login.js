


let form = document.querySelector('form');


let data = localStorage.getItem('user_data')
let user_data = JSON.parse(data)


form.addEventListener("submit", checkLogin)


function checkLogin(event){
    event.preventDefault()
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');

    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 || email.value.indexOf("@") > email.value.lastIndexOf("."))
     {
        alert("Email is invalid")
        return
     }

    for(let t of user_data){
        if(t.email == email.value){
            if(t.password == password.value){
                alert("Login Successful")   
            }
            else{
                alert("Password is incorrect")
            }
           
        }
        else{
            alert("User does not exist")
        }
        generateToken(email.value)
        localStorage.setItem('user_data', JSON.stringify(user_data))
    }


    function generateToken(email){
        let collection = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$-_.+!*'(),"
        let token = ""

        while(token.length<10){
              token = token + collection[parseInt(Math.random()*collection.length)]
              if(token.length == 10){
                 let matchedUser =  user_data.filter(user => user.token == token)

                 if(matchedUser.length > 0){
                     token = ""
                 }
              }
        }

         let users =  user_data.filter(user => user.email == email)
          users[0].token = token

        

    }
}