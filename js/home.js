
//getting an element from the DOM with query selector
let get_main = document.querySelector( `#main` )
//getting the token value from the cookies jar and storing it in a variable 
let token = Cookies.get( `token` );
//checking if the token(cookie in the jar) is not found in the cookies jar
if ( token === undefined ){
    // if the cookie is not there we show  a messageand a button to take users to login
    get_main.insertAdjacentHTML( `afterbegin`,`<h3 style="color:red;">No User is Logged In</h3> <a href="/index.html"><button>Go Home</button></a>` )

} else
{
    //if there is a cookie in the jar we show a text to log users out and also delete the cookie from the jar 
    get_main.insertAdjacentHTML(`beforeend`,`<button class="logout">log Out</button>`)
}


//GET REquest 
// used the successGet function to loop through 
// the response data aray and display the result dynamically
function successGet( response ){
    let resdata =response[`data`][`data`]
    for ( let i = 0; i< resdata.length; i++ ){
        get_main.insertAdjacentHTML( `beforeend`,
            `<div><p> name:${ resdata[i][`name`] }</p>
            <p> antone_value:${ resdata[i][`pantone_value`]}</p><p> Year:${resdata[i][`year`]}</p>
            <div  style="background-color:${resdata[i][`color`]}; height:50px ;width:50px;"></div></div` )
    }
    }
   
// failureGet function to display if the resturned data is not proper for many http request falior resons
function failureGet( error ){
 
}
//  used axios to get a post data using an API
axios.request({
    url: `https://reqres.in/api/unknown`,
   
    
} ).then( successGet ).catch( failureGet ); 

//created a function that delets a cookie from a cookies jar
function removeCookie( details ){
    Cookies.remove( `token` );
   
 
}
//BONUS
// get the delete button tag using querySelectors and
//  adding event lsitener and making js call the  removeCookie function to remove
// our selection and display our empty cart message

let empty_btn = document.querySelector(`.logout` );
empty_btn.addEventListener(`click`, removeCookie)