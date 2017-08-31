// Include React
let React = require("react");
let Link = require("react-router").Link;

let Child2 = React.createClass({

  // Here we render the component
  render: function() {

    return (
            <div className="col-lg-12">
				<div className="panel panel-primary">
					<div className="panel-heading">
						<h3 className="panel-title">Child #2</h3>
					</div>
					<div className="panel-body">
						<div className="panel panel-success">
							<div className="panel-body">
								What a clowder this garbage brain is,
                                <br/>
								everyone hates this papa.
							</div> 
						</div>
					</div>
				</div>
			</div>
    );
  }
});

// Export the component back for use in other files
module.exports = Child2;