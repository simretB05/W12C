// POST REquest
// selected an html element to display the success of the post method
let get_main = document.querySelector( `#main` )

function success( response){
        
    let logIn = response.data.token

    Cookies.set( `token`, logIn )
    window[`location`]=`/pages/home.html`
}
// failure function to display if the login is not valid

function failure( error ){
    
    get_main.insertAdjacentHTML( `beforeend`, `<h3 style="color:red;">the Login Is Invalid</h3>` )
}

//function  
function logIn( details){
   
 
//selected all the input elements using querySelector and got
//  there value using the value attribute for inputs
let email_input = document.getElementById(`email_input`)
let email_value = email_input[`value`]
let pass_input = document.getElementById(`pass_input`)
let pass_value = pass_input[`value`]

//added a success function if response for POST request is successful and show a message

// used axios get method to POST data 
    axios.request( {
        url: `https://reqres.in/api/login`,
        method: `POST`,
        data: {
            email: email_value,
            password: pass_value
        
        }
    }).then(success).catch(failure);
}

//adding an eventListener to a button which submits inputs 
let submit_btn = document.querySelector(`.add`)
submit_btn.addEventListener( `click`, logIn)