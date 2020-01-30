import React, {Component} from 'react';

import ImportantThings from "./ImportantThings";
import Adoption from "./Adoption";
import News from "./News";

class HomePage extends Component{
    state = {
        data: null,
    };

    componentDidMount() {
        fetch("http://localhost:3001/db.json").then(r => r.json())
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
        const news = this.state.data.news;
        const accountNumber = this.state.data.settings.accountNumber;
        const descriptionAdd = this.state.data.settings.descriptionAdd;
        const nameForTax = this.state.data.settings.nameForTax;
        const krsNumber = this.state.data.settings.krsNumber;

        return(
            <div className='container'>
                <Adoption />
                <ImportantThings accountNumber={accountNumber} descriptionAdd={descriptionAdd}
                                 nameForTax={nameForTax} krsNumber={krsNumber}/>
                <News newsList={news} />
           </div>
        )
    }
}

export default HomePage
