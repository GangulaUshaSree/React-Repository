import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "./Utils/UserContext";

class About extends React.Component {
    constructor(props) {
        super(props);

        //console.log("Parent Constructor");
    }

    componentDidMount() {
        //console.log("Parent Component Did Mount");
    }

    render() {
        //console.log("Parent Render");
        return (
            <div>
                <h1> About Us</h1>
                <div> UserName
                    <UserContext.Consumer>
                        {({loggedInUser}) => <h1 className="text-lg font-bold">{loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
                <h2> About Us Page</h2>
                { /*<User name = { "Usha Sree" } location = { "Hyderabad" }/>*/  }
                <UserClass name = { "Usha Sree"} location = { "Hyderabad" }/>
            </div>
        )
    }
}

export default About;