// Include React
let React = require("react");
let Link = require("react-router").Link;

let Grandchild1 = React.createClass({

  // Here we render the component
  render: function() {

    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">Grandchild #1</h3>
        </div>
        <div className="panel-body">
            Tried to steal golden eye from museum, but robocop? Terry has a gun at the moment.
        </div> 
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Grandchild1;