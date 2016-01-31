import React, { Component } from 'react';
import { connect } from 'react-redux';


export default class BookDetail extends Component {
    render() {
        if (!this.props.book) {
            return (<div>Select book</div>)
        }
        return (
            <div>
                <h3>Details for</h3>
                <div>{this.props.book.title}</div>
                <div>{this.props.book.pages} pages</div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    "use strict";
    return {
        book: state.activeBook
    }
}


export default connect(mapStateToProps)(BookDetail);
