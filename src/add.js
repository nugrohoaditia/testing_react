import React from 'react';

class Add extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            items: [],
            isLoaded: false,
            display: '',
            cursor: ''
        }
        this.displaySelect = this.displaySelect.bind(this)
    }

    componentDidMount(){
        this.setState({display: 'none'})
    }

    displaySelect() {
        if (this.state.display === 'none'){
            this.setState({display:'block'})
        }
        else{
            this.setState({display:'none'})
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

    	let style = {
            display: this.state.display
        }
        return (
            <div className="add-container">
                <div className="add-cover"  onClick={this.displaySelect}><span>(+) Add More Currencies</span></div>
                <div className="add-menu" style={style}>
                    <select>
                        <option>{items.rates.BGN }</option>
                        <option>JPY1</option>
                        <option>JPY2</option>
                        <option>JPY3</option>
                    </select>
                    <button type="submit">submit</button>
                </div>
            </div>
        );
    }
}

export default Add;
