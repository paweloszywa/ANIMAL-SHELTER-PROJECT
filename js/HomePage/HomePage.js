import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ImportantThings from "./ImportantThings";
import Adoption from "./Adoption";
import News from "./News";

class HomePage extends Component{
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
        const news = data.news;
        const accountNumber = data.settings.accountNumber;
        const descriptionAdd = data.settings.descriptionAdd;
        const nameForTax = data.settings.nameForTax;
        const krsNumber = data.settings.krsNumber;

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
