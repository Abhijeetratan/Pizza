export const registerUserReducer = (state={}, action)=>{

    switch(action.type){
        case 'USER_REGISTER_REQUEST' : return{
            loading: true
        }
        case 'USER_REGISTER_SUCCESS': return{
            loading: false,
            success : true
        }
        case 'USER_REGISTER_FAILED' : return{
            loading: false,
            error: action.payload
        }
        default : return state
    }
}

export const loginUserReducer = (state={}, action)=>{

    switch(action.type){

        case 'USER_login_REQUEST' : return{
            loading: true
        }
        case 'USER_login_SUCCESS': return{
            loading: false,
            success : true,
            currentUser : action.payload
        }
        case 'USER_login_FAILED' : return{
            loading: false,
            error: action.payload
        }
        default : return state
    }
}