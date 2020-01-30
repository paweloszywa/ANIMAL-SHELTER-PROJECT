import React, {Component} from 'react';

import AdoptionCatPage from "../Adoption/AdoptionCatPage";
import AdoptionDogPage from "../Adoption/AdoptionDogPage";

class AllPetsSection extends Component{
    render() {
        return(
            <>
            <AdoptionDogPage/>
            <AdoptionCatPage/>
            </>
        )
    }
}

export default AllPetsSection