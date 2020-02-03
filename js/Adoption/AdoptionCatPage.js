import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../../sass/main.scss';
import AdoptMainText from "./MainTextSection";
import PetInfo from "./PetInfo";

class AdoptionCatPage extends Component{

    render() {
        return(
            <>
                <section className='all-pets-to-adopt'>
                <div className='container'>
                    <AdoptMainText text={this.props.data.nameCategoryCats}/>
                    <div className='all-adopt-container'>
                        <PetInfo animals={this.props.data.cats}/>
                    </div>
                </div>
                </section>
            </>
        )
    }
}

export default AdoptionCatPage