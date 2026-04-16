import { useEffect, useState } from "react";

const User = (props) => {
    //destructing
    const { name, location } = props;

    const [count, setCount] = useState(0);
    const [count2] = useState(2);

    useEffect(() => {
        const timer = setInterval(() => {
            console.log("useEffect setInterval called");
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return <div className = "user-card">
        <h3> Count: {count} </h3>
        <button onClick={() => {
            setCount(count + 1);
        }}>Increase count</button>
        <h3> Count: {count2} </h3>
        <h3> Name: {name} </h3>
        <h3> Location: {location} </h3>
        <h3> Contact: @UshaSree19 </h3>
    </div>
}

export default User;