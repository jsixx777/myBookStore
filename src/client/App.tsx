import * as React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {StripeProvider, Elements} from "react-stripe-elements";
import "./scss/app";
import Navbar from "./components/shared/Navbar";
import AllBooks from "./components/public/AllBooks";
import SingleBook from "./components/public/SingleBook";
import Home from "./components/public/Home";
import Register from "./components/admin/Register";
import Login from "./components/admin/Login";
import Admin from "./components/admin/Admin";


export default class App extends React.Component<IAppProps, IAppState> {
    render() {
        return (
                <BrowserRouter>
                    <>
                        <Navbar/>
                    </>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/books" component={AllBooks}/>
                        <Route exact path="/single/:id" component={SingleBook}/>
                        <Route exact path="/register" component={Register}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/admin" component={Admin}/>
                        
                    </Switch>
                </BrowserRouter>
        );
    }
}

interface IAppProps {
}

interface IAppState {
}
