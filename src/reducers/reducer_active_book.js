// state arg != application state
// only what reducer is responsible for
export default function(state = null , action) {
    "use strict";
    switch(action.type){
        case 'BOOK_SELECTED':
            return action.payload;
    }

    return state;
}
