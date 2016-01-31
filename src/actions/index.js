export function selectBook (book) {
    "use strict";
    // selectBook is an ActionCreator,
    // needs to return an action = an object
    // with a type property (i.e. type and payload)
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}
