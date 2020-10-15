import React, { createContext, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import Home from './Pages/Home/Home';
import Order from './Pages/Dashboard/Order/Order';
import Review from './Pages/Dashboard/Review/Review';
import AddService from './Pages/Dashboard/AddService/AddService';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import ClientsTotalService from './Pages/Dashboard/ClientsTotalService/ClientsTotalService';
import Login from './Pages/Login/Login';
import ServiceList from './Pages/Dashboard/ServiceList/ServiceList';
import PrivateRoute from './Components/LoginItems/PrivateRoute/PrivateRoute';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/dashboard/order/:id">
            <Order />
          </PrivateRoute>
          <PrivateRoute path="/dashboard/serviceList">
            <ServiceList />
          </PrivateRoute>
          <PrivateRoute path="/dashboard/review">
            <Review />
          </PrivateRoute>
          <PrivateRoute path="/dashboard/totalServiceList">
            <ClientsTotalService />
          </PrivateRoute>
          <PrivateRoute path="/dashboard/addService">
            <AddService />
          </PrivateRoute>
          <PrivateRoute path="/dashboard/makeAdmin">
            <MakeAdmin />
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
