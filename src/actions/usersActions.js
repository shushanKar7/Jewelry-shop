import axios from "axios";

export const getUser = (username) => dispatch=> {
    let token = localStorage.getItem('token');
    console.log(token)
    axios('http://192.168.5.69:8001/api/Users/User', {
        Controller: "users", 
        Method: "user",
        username: username,
        header: {
            [username] : token
        }   
},
 )
.then ( res => console.log(res) )
.catch ( console.log )
}