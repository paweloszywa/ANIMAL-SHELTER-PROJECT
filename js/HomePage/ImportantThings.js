import React, {Component} from 'react';

import help from "../../images/dog.jpeg";
import helpTax from "../../images/dog-getting-pet-2033478.jpg";
import MainTextSection from "../Adoption/MainTextSection";
import dogAdopt from "../../images/adult-beagle-walking-on-grass-field-1485637.jpg";
import {Link} from "react-router-dom";

class ImportantThings extends Component{
    render() {
        const {accountNumber, descriptionAdd, nameForTax, krsNumber} = this.props;
        return(
            <section className='important-things'>
                    <MainTextSection text={'WAŻNE'}/>
                    <div className='photo-section'>
                        <div className='one-photo'>
                            <div className='photo-of-pet'>
                            <img src={help}/>
                                <div className='text-adopt important-text important-account'>
                                    <h2 className='important-main'>CHCESZ POMÓC?</h2>
                                    <p className='important-description'>Jeśli chcesz wesprzeć działalność Schroniska, prosimy dokonywać wpłaty na nasze konto:</p>
                                    <p className='main-info'>{accountNumber}</p>
                                    <p className='add-info'>z dopiskiem {descriptionAdd}</p>
                                </div>
                            </div>
                            </div>

                        <div className='one-photo'>
                            <div className='photo-of-pet'>
                            <img src={helpTax}/>
                                <div className='text-adopt important-text important-tax'>
                                    <h2 className='important-main'>PRZEKAŻ 1% PODATKU</h2>
                                    <p className='important-description'>Przekaż 1% swojego podatku na naszych podopiecznych.</p>
                                    <p className='main-info'>KRS: {krsNumber}</p>
                                    <p className='add-info'>{nameForTax}</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        )
    }
}

export default ImportantThings
