import React, {lazy, Suspense, Component} from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Footer from '../components/layout/footer';
import Header from '../components/layout/header';
import CustomizedLoader from '../components/customizedLoader'
const Products = lazy(() => import("../components/products"));


export default class pages extends Component{
    
    constructor(props) {
        super(props);

        this.state = {
            currentURL: ""
        }
    }    

    componentDidMount() {
        this.setState({currentURL: window.location.pathname});   
    }



    render(){
        return (
            <BrowserRouter>
                <Suspense fallback={<div><CustomizedLoader size="large" /></div>}>
                    <Header />
                    <Switch>
                        <Route exact path="/" component = {Products}/>
                    </Switch>
                    <Footer/>
                </Suspense>
            </BrowserRouter>
        )
    }
}

