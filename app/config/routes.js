// Include the React library
let React = require("react");

// Include the react-router module
let router = require("react-router");

// Include the Route component for displaying individual routes
let Route = router.Route;

// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
let Router = router.Router;

// Include the hashHistory prop to handle routing client side without a server
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory
let hashHistory = router.hashHistory;

// Include the IndexRoute (catch-all route)
let IndexRoute = router.IndexRoute;

// Reference the high-level components
let Parent = require("../components/Parent");
let Child1 = require("../components/Child/Child1");
let Grandchild1 = require("../components/Child/Grandchild/Grandchild1");
let Child2 = require("../components/Child/Child2");
let Grandchild2 = require("../components/Child/Grandchild/Grandchild2");


// Export the Routes
module.exports = (

  // The high level component is the Router component
  <Router history={hashHistory}>
    <Route path="/" component={Parent}>

      {/* If user selects appropriate component */}
      <Route path="Child1" component={Child1}>
          <Route path="Grandchild1" component={Grandchild1} />
          <Route path="Grandchild2" component={Grandchild2} /> 
          <IndexRoute component={Grandchild1} />
      </Route>  
       <Route path="Child2" component={Child2} /> 
      {/* default route */}
      <IndexRoute component={Child1} />

    </Route>
  </Router>

);
