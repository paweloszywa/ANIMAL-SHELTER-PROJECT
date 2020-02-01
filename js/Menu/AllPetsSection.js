import React, {Component} from 'react';

import AdoptionCatPage from "../Adoption/AdoptionCatPage";
import AdoptionDogPage from "../Adoption/AdoptionDogPage";
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";

class AllPetsSection extends Component{
    render() {
        return(
            <>
                <ScrollUpButton ContainerClassName="AnyClassForContainer" />
            <AdoptionDogPage/>
            <AdoptionCatPage/>
            </>
        )
    }
}

export default AllPetsSection