
const appState = {
    auth:{
        authState: false,
        token: ''
    },
    meta:{
        location: null,
        preference: null,
        language: 'en'
    }
}

export function appReducer(state = appState, action){
    switch(action.type){
        case 'Auth/loggedin':
            return {
                ...state,
                auth:{
                    ...state.auth,
                    authState: true,
                    token: action.payload
                }
            }
        case 'Auth/logout':
            return {
                ...state,
                auth:{
                    ...state.auth,
                    authState: false,
                    token: ''
                }
            }
        case 'Meta/setLocation':
            return {
                ...state,
                meta:{
                    ...state.meta,
                    location: action.payload
                }
            }
        
        case 'Meta/unsetLocation':
            return {
                ...state,
                meta:{
                    ...state.meta,
                    location: ''
                }
            }
        case 'Meta/defaultLocation':
            return {
                ...state,
                meta:{
                    ...state.meta,
                    location: ''
                }
            }
        case 'Meta/setLanguage':
            return {
                ...state,
                meta:{
                    ...state.meta,
                    language: action.payload
                }
            }
        case 'Meta/setDefaultLanguage':
            return {
                ...state,
                meta:{
                    ...state.meta,
                    language: action.payload
                }
            }
        default:{
            return state
        }
    }
}