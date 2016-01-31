import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {selectBook} from '../actions/index';


class BookList extends Component {
    renderList() {
        return this.props.books.map((book)=> {
            return (
                <li key={book.title}
                    className="list-group-item"
                    onClick={ () => this.props.selectBook(book) }>
                        {book.title}
                </li>
            )
        })
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
            {this.renderList()}
            </ul>
        )
    }
}


function mapStateToProps(state) {
    "use strict";
    // whatever gets returned here will show up as props
    // inside of BookList

    return {
        books: state.books
    }
}

// anything returned from this function will end up
// as props on the booklist container
function mapDispatchToProps(dispatch) {
    "use strict";
    //whenever selectBook is called, the result should be
    // passed to all our reducers
    return bindActionCreators({selectBook: selectBook}, dispatch)
}

// promote booklist from a component to a container,
// it needs to know about this new dispatch method, selectBook.
// Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
