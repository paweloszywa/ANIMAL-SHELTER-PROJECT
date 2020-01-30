import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../../sass/main.scss';
import AdoptMainText from "./MainTextSection";
import PetInfo from "./PetInfo";

class AdoptionDogPage extends Component{
    state = {
        data: null,
    };

    componentDidMount() {

        fetch("http://localhost:3000/dogs").then(r => r.json())
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
        const animals = this.state.data;

        return(
            <>
                <section className='all-pets-to-adopt'>
                    <div className='container'>
                        <AdoptMainText text={'PSY DO ADOPCJI'}/>
                        <div className='all-adopt-container'>
                            <PetInfo animals={animals}/>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default AdoptionDogPage