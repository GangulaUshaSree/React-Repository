import React from "react";
import ReactDOM from "react-dom/client";

//calling Component in other Component / Nested Component / Nested functions
//Interviews ask it's as Component composition

/*const Title = () => (
    <h1>Nested Component - Title functional component</h1>
);

//Many ways to append the component inside a component like - < Title /> or <Title></Title> or {Title()}
const HeadingComponent = () => (
    <div>
        < Title />
        <h1>Nested Component - HeadingComponent functional component</h1>
    </div>
);

var Root = ReactDOM.createRoot(document.getElementById("root"));

Root.render(< HeadingComponent />);
*/


//calling reactElement in Component
//Interviews ask it's as Component composition

//by using the {} we can import any code or anything which we want in JSX code.
//using the {} we can import react element in components.

 //const title1 = <h1>title1 React Element</h1>;

//or else like this
/*const title2 = (
    <h1>title2 React Element</h1>
);*/

//var number = 10;

    //{1000}
    //{number}
    //{100 + 200}

//ReactElement inside ReactElement
const element = <span> React Element</span>;
const title2 = (
    <h1> 
        {element}
        title2 React Element 
    </h1>
);

//In this way we can call React element in components - {title2}
const HeadingComponent = () => (
    <div>
        {title2} 
        <h1>Nested Component - HeadingComponent functional component</h1>
    </div>
);

var Root = ReactDOM.createRoot(document.getElementById("root"));

Root.render(< HeadingComponent />);