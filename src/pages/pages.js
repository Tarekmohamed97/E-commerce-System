import React, {lazy, Suspense} from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Footer from '../components/layout/footer';
import Header from '../components/layout/header';
const Products = lazy(() => import("../components/products"));

function Pages() {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Header/>
                <Switch>
                    <Route exact path="/products" component = {Products}/>
                </Switch>
                <Footer/>
            </Suspense>
        </BrowserRouter>
    )
}

export default Pages
