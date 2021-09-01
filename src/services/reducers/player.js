import { SET_CURRENT_CHANNEL } from "../actions/player";

const initialState = {
    currentChannel: 'https://lyfwb59804a.a.trbcdn.net/AllChannels/360_Novosti_SD/master.m3u8'
}

export const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_CHANNEL : {
            return {
                ...state,
                currentChannel: action.link,
            }
        }
        default: {
            return state;
        }
    }
        
}