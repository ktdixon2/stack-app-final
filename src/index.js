import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class StackApp extends Component {
    render() {
        return (
            <div>
                <h3>StackApp Supported Currencies</h3>
                <h5>Bitcoin</h5>
                <h5>Litecoin</h5>
                <h5>Ethereum</h5>
                < UserList />
            </div>
        );
    }
}
class UserList extends Component {
    render() {
        return (
            <article>
                <h1>Registered Users</h1>
                <section>KTDixon2</section>
                <section>HSanborn</section>
                <section>TSanborn</section>
                <section>TRoberts</section>
            </article>
        );
    }
}

ReactDOM.render(<StackApp />, document.querySelector("#root"));



