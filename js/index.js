import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../sass/main.scss';
import {
    HashRouter,
    Route,
    Link,
    Switch,
} from 'react-router-dom';

import HomePage from "./HomePage/HomePage";
import AdoptionCatPage from "./Adoption/AdoptionCatPage"
import AdoptionDogPage from "./Adoption/AdoptionDogPage"
import Header from "./Header"
import Footer from "./Footer";
import AboutUs from "./Menu/AboutUs";
import ContactSection from "./Menu/ContactSection";
import AdvicesAdopt from "./Menu/AdvicesAdopt";
import AllPetsSection from "./Menu/AllPetsSection";


class Index extends Component {
    state = {
        data: null,
    };

    componentDidMount() {
        fetch("https://my-json-server.typicode.com/paweloszywa/ANIMAL-SHELTER-PROJECT/db").then(r => r.json())
            .then(data => {
                this.setState({
                    data: data
                });
            });
    }

    render() {
        if (this.state.data === null){
            return null
        }

        const data = this.state.data;

        return (
            <>
                <HashRouter>
                    <Header shelterName={data.settings.name}/>
                    <Switch>
                        <Route exact path={"/"} component={() => <HomePage data={data} />}/>
                        <Route exact path={"/adoption/cat"} component={() => <AdoptionCatPage data={data}/>}/>
                        <Route exact path={"/adoption/dog"} component={() => <AdoptionDogPage data={data}/>}/>
                        <Route exact path={"/adopt-all"} component={() => <AllPetsSection data={data}/>}/>
                        <Route exact path={"/advices"} component={AdvicesAdopt}/>
                        <Route exact path={"/about-us"} component={AboutUs}/>
                        <Route exact path={"/contact"} component={ContactSection} />
                    </Switch>
                    <Footer  phoneNumber={data.settings.contact.phone} emailAddress={data.settings.contact.mail}
                             street={data.settings.contact.street} streetGoogle={data.settings.contact.streetGoogleLink}
                             city={data.settings.contact.city}
                             facebook={data.settings.contact.facebook} instagram={data.settings.contact.instagram}
                    />
                </HashRouter>
            </>
        )
    }
}

ReactDOM.render(<Index />, document.getElementById("index"));