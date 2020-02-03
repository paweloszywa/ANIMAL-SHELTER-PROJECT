import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../../sass/main.scss';
import AdoptMainText from "./MainTextSection";
import PetInfo from "./PetInfo";

class AdoptionDogPage extends Component{
    render() {
        return(
            <>
                <section className='all-pets-to-adopt'>
                    <div className='container'>
                        <AdoptMainText text={'PSY DO ADOPCJI'}/>
                        <div className='all-adopt-container'>
                            <PetInfo animals={this.props.data.dogs}/>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default AdoptionDogPage