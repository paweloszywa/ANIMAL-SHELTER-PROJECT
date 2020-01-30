import React, {Component} from 'react';
import {
    Link,
} from 'react-router-dom';

import dogAdopt from "../../images/adult-beagle-walking-on-grass-field-1485637.jpg";
import catAdopt from "../../images/adorable-animal-cat-248350.jpg";
import MainTextSection from "../Adoption/MainTextSection";

class Adoption extends Component{
    render() {
        return(
            <section className='adoption'>
                <div>
                    <cite> „Uratowanie jednego psa nie zmieni całego świata, ale dla tego jednego psa zmieni się cały świat”</cite>
                    <MainTextSection text={'ZWIERZĘTA DO ADOPCJI'}/>
                    <div className='photo-section'>

                        <div className='one-photo'>
                            <div className='photo-of-pet'>
                                <img src={dogAdopt}/>
                                <Link to='/adoption/dog' className='text-adopt adopt-dog'>ADOPTUJ PSA</Link>
                            </div>
                        </div>

                        <div className='one-photo'>
                            <div className='photo-of-pet'>
                                <img src={catAdopt}/>
                                <Link to='/adoption/cat' className='text-adopt adopt-cat'>ADOPTUJ KOTA</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Adoption
