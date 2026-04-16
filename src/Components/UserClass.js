import React from "react";

class UserClass extends React.Component {
    
    constructor(props) {
        super(props);

        //console.log("Child Constructor");

        //when we are loading the class it will create a instance
        // creating the state variable. Here state var is an object(Large object)
        this.state = {
            userInfo: {
                login: "dummy",
                location: "default location",
                avatar_url: "https://dummy.com"
            }
        };
    }

    async componentDidMount() {
        //console.log(this.props.name + "Child Component Did Mount");
        // This function is mostly used for API calls

        // We can use it for other things as well like:
        /*this.timer = setInterval( () => {
            console.log("setInterval called");
        },1000);*/

        //API call
        const data = await fetch("https://api.github.com/users/UshaSree");
        const json = await data.json();

        console.log(json);

        this.setState({
            userInfo: json
        });

        console.log(json);
    }
    
    componentDidUpdate() {
        //console.log(this.props.name + "Component Did Update");
    }

    componentWillUnmount() {
        //console.log(this.props.name + "Component Will Unmount");
        //It is called when we want any changes after unmount/unloading/exit from that current page
        //clearInterval(this.timer);
    }

    render() {
        //destructing
        const {login, location, avatar_url} = this.state.userInfo;

        console.log("Child Render");

        return <div className = "user-card">
            <img src={avatar_url} />
            <h3> Name: {login} </h3>
            <h3> Location: {location} </h3>
            <h3> Contact: @UshaSree19 </h3>
        </div>
    }

}

export default UserClass;