import React from "react";
import { Switch, Route } from "react-router-dom";
import ClientCards from './components/ClientCards';
import EmployeeCards from './components/EmployeeCards';
import MessageCards from "./components/MessageCards";
import ContactUs from './components/ContactUs';
import Dashboard from "./components/Dashboard";

export default (
  <Switch>
    <Route path='/dashboard' component={Dashboard} />
    <Route path='/employees' component={EmployeeCards} />
    <Route path='/clients' component={ClientCards} />
    <Route path='/messages' component={MessageCards} />
    <Route path='/contact' component={ContactUs} />
  </Switch>
)