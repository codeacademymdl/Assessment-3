import React, { Component } from 'react';
// import './BooksGrid.css';

class BooksGrid extends Component {
    render() {
        return (
            <div>

                <fieldset>
                    <legend align="center">{this.props.author}</legend>

                </fieldset>

            </div>
        );
    }
}

export default BooksGrid;
