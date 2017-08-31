// Include React
let React = require("react");
let Link = require("react-router").Link;

let Grandchild2 = React.createClass({

  // Here we render the component
  render: function() {

    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">Grandchild #2</h3>
        </div>
        <div className="panel-body">
        "dont tell the mommy,
        <br/>
        i need a daddy."
        </div> 
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Grandchild2;