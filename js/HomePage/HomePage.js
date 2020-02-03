import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ImportantThings from "./ImportantThings";
import Adoption from "./Adoption";
import News from "./News";
import '../../sass/main.scss';
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";

class HomePage extends Component{

    render() {
        const news = this.props.data.news;
        const accountNumber =  this.props.data.settings.accountNumber;
        const descriptionAdd = this.props.data.settings.descriptionAdd;
        const nameForTax = this.props.data.settings.nameForTax;
        const krsNumber = this.props.data.settings.krsNumber;

        return(
            <div className='container'>
                <ScrollUpButton ContainerClassName="AnyClassForContainer" />
                <Adoption />
                <ImportantThings accountNumber={accountNumber} descriptionAdd={descriptionAdd}
                                 nameForTax={nameForTax} krsNumber={krsNumber}/>
                <News newsList={news} />
           </div>
        )
    }
}

export default HomePage
