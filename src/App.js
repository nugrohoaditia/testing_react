import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './header';
import Content from './content';
import Add from './add';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }


    }

    componentDidMount() {
    fetch('https://exchangeratesapi.io/api/latest')
    // fetch('http://jsonplaceholder.typicode.com/users')

    .then(res => res.json())
    .then(json => {
            this.setState({
                isLoaded: true,
                items: json,
            })
        });
        
    }      


    render() {

        var { isLoaded, items } = this.state;
        console.log(items.rates);
        if (!isLoaded) {
            return <div> Loading...</div>;
        } else {
            return (
                <div className="all-container">
                    <Header />

                    <div className="divider"></div>
                    <Content />
                    <Add />
                </div>
            );
        }
    }
}

export default App;
