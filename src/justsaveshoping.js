import React, { Component } from 'react';
// import logo from './logo.svg';
// import Header from './header';
// import Content from './content';
// import Add from './add';
import './App.css';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            buyItems: ['milk','baby','sup']
        }
    }

    addItem(e){
        e.preventDefault();
        const {buyItems} = this.state;
        const newItem = this.newSelect.value;

        this.setState({
            buyItems: [...this.state.buyItems, newItem]
        })

        this.addForm.reset();
    }

    render(){
        const {buyItems} = this.state;

        return(
            <div>
                <header>
                    <h1>Shoping List</h1>

                    <form ref={input => this.addForm= input} onSubmit= {(e) => {this.addItem(e)} }>
                        <div>
                            <label>Add New Item</label>
                            <select ref={input => this.newSelect = input}>
                                <option value="test1">test1</option>
                                <option value="test2">test2</option>
                                <option value="test3">test3</option>
                                <option value="test4">test4</option>
                            </select>
                            <input ref={input => this.newItem= input} type="text" placeholder="bananas .. " id="inputitem"></input>
                        </div>
                        <button type="submit" className="btn btn-primary">submit</button>
                    </form>

                </header>
                
                {
                    buyItems.map(item => {
                        return <p key={item}>{item}</p>
                    })
                }
            </div>
        )
    }
}



export default App;
