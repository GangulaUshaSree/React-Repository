import React from "react";

class UserClass extends React.Component {
    
    constructor(props) {
        super(props);

        console.log("Child Constructor");

        //when we are loading the class it will create a instance
        // creating the state variable. Here state var is an object(Large object)
        this.state = {
            count: 0,
            count2: 2
        }
    }

    componentDidMount() {
        console.log("Child Component Did Mount");
        // This function is mostly used for API calls

        // We can use it for other things as well like:
        this.timer = setInterval( () => {
            console.log("setInterval called");
        },1000);
    }
    
    componentDidUpdate() {
        console.log("Component Did Update");
    }

    componentWillUnmount() {
        console.log("Component Will Unmount");
        //It is called when we want any changes after unmount/unloading/exit from that current page
        clearInterval(this.timer);
    }

    render() {
        //destructing
        const {name, location} = this.props;
        const { count, count2 } = this.state;

        console.log("Child Render");

        return <div className = "user-card">
            <h3> Count: {count} </h3>
            <button onClick={() => {
                // Never update the state variables(this.state.count) directly. 
                // We need to use this.setState() function to update the state variables.
                this.setState({
                    count: this.state.count + 1
                });
            }}>Increase count</button>
            <h3> Count: {count2} </h3>
            <h3> Name: {name} </h3>
            <h3> Location: {location} </h3>
            <h3> Contact: @UshaSree19 </h3>
        </div>
    }

}

export default UserClass;