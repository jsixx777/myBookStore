import * as React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import {StripeProvider, Elements} from "react-stripe-elements";



import "./scss/app";
//import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/shared/Navbar";
import AllBooks from "./components/public/AllBooks";
import SingleBook from "./components/public/SingleBook";
import Home from "./components/public/Home";


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
                        
                    </Switch>
                </BrowserRouter>
        );
    }
}

interface IAppProps {
}

interface IAppState {
}
