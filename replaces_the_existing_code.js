/* 
In the replace_the_existing_code.html code the div tag looks like

<div id = "root">
<h1> h1 tag </h2>
</div>

In this replace_the_existing_code.js code the div tag looks like
<div id = "root">
<h1> Existing tags are replaced with the new tags </h1>
<h2> h2 tag </h1>
</div>

*/

var heading = React.createElement("div", {}, 
    [React.createElement("h1", {}, "Existing tags are replaced with the new tags"),
    React.createElement("h2", {}, "h2 tag")]
    );

var root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
