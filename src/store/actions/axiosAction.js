import axios from 'axios';

export const signUp = (data) => (dispatch) => {
    axios.post("http://192.168.5.69:8001/api/Users/Register", data).then((res) => {
        console.log(res.data, "data");
        if (res.status === 200) {

            localStorage.setItem(`${res.data.email}Token`, res.data.token);
            dispatch({
                type: 'LOGGEDUSER',
                payload: res.data
            });
        } else {
            dispatch({
                type: "ERROR"
            });
        }
    });
};

export const logIn = (data) => (dispatch) => {
    const body = { ...data };
    axios
        .post("http://192.168.5.69:8001/api/Users/Login", body, {
            "Content-Type": "application/json"
        })
        .then((res) => {
            console.log(res.data);
            if (res.status === 200) {
                dispatch({
                    type: 'LOGGEDUSER',
                    payload: res.data
                });
            } else {
                dispatch({
                    type: "ERROR",
                    payload: true
                });
            }
        });
};



