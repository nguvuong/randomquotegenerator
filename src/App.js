import React from "react";

// import axios for calling the api 
import axios from 'axios'

// import the css file 
import './App.css'



// this is the template for the react component
class App extends React.Component { 
    state = {
        advice: ''
    }

    // this may be used to check whether the component is mounted into the DOM or not 
    componentDidMount(){
        // console.log('COMPONENT DID MOUNT')
        // call the function 
        this.fetchAdvice();
    }

    // arrow function declaration
    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then((response) => {
                // destructure 
                const { advice } = response.data.slip

                // set advice 
                this.setState({advice});

                // response.data to get the object
                console.log(advice);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        const { advice } = this.state

        return (
            <div className="app">
                <div className="card">
                    <h1 className="heading">{advice}</h1>  
                    {/* fetch advice function */}
                    <button className="button" onClick={this.fetchAdvice}>
                            <span>
                                GIVE ME ADVICE!
                            </span>
                        </button>  
                </div> 
            </div>
        );
    }
}

export default App;