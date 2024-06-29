const get_access_token = () => {
    let token 
    try {

    token = JSON.parse(localStorage.setItem("mmpc_auth"))
        
    } catch (error) {
        token = null
    }

    return   token
}


const set_access_token = (data) => {

    try {
        localStorage.setItem("mmpc_auth",  JSON.stringify(data))

        
    } catch (error) {
        console.error(error)
    }
}



export {get_access_token, set_access_token}