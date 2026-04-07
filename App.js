import React from "react";
import ReactDOM from "react-dom/client";

//Create an element
//React.createElement => ReactElement which is an Object => After Render => HTMLElement

var Heading = React.createElement("h1", {id: "heading"}, "Namaste Dev");

//JSX - HTML like or XML like sysntax

//JSX (Transpiled before it reaches the JS) - Parcel - Babel

//JSX => Babel trabspiles it to React.createElement => ReactElement which is an Object => After Render => HTMLElement

/*var jsxHeading = (
        <h1 id = "heading" tabIndex="5">
            Nameste Dev using JSX
        </h1>
    );*/

//Components: 
//Two Types => Class based Components(Which is Old one) and Functional Components(which is New one)

//Functional Components: (99.9% developers uses functional components)
//Functional COmponent is just a normal JavaScript function
//The function which return JSX code/ReactElement is the functional Component
//Many ways to write the code

//First way
/*const HeadingComponent1 = () => {
    return <h1>Nameste Dev from first component</h1>;
};

//Second way
const HeadingComponent2 = () => (
    <h1>Namaste Dev from second component</h1>
);

//Third way
const HeadingComponent3 = () => <h1>Namaste Dev from third Component</h1>;*/

//Example code
const HeadingComponent = () => (
    <div>
        <h1>Namaste Dev from Functional component</h1>
    </div>
);

var Root = ReactDOM.createRoot(document.getElementById("root"));

//If we want to render an ReactElement the we need to use created ReactElement ex: Heading, jsxHeading etc.,
/*
Root.render(jsxHeading);
*/

//If we want to render an component we need to using the component in < /> Ex: < HeadingComponent />
//Then only Babel will understand it is an component not reactElement.
Root.render(< HeadingComponent />);