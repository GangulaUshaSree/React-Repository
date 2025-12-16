/* 

<div id = "Parent">

<div id = "child1">
<h1>This is Parent -> Child1 Div tag </h1>
<h2>h2 tag</h2>
</div>

<div id = "child2">
<h1>This is Parent -> Child2 Div tag </h1>
<h2>h2 tag</h2>
</div>

</div>

*/

var heading = React.createElement("div", { id : "Parent"}, 
    [React.createElement("div", { id : "child1"},
        [React.createElement("h1", {}, "This is Parent -> Child1 -> h1 Div tag"),
        React.createElement("h2", {}, "This is Parent -> Child1 -> h2 Div tag")]
    ),
    React.createElement("div", { id : "child2"},
        [React.createElement("h1", {}, "This is Parent -> Child2 -> h1 Div tag"),
        React.createElement("h2", {}, "This is Parent -> Child1 -> h2 Div tag")]
    )]
);

var root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
