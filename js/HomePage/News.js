import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../../sass/main.scss';
import NewsItems from "./News/NewsItems";
import MainTextSection from "../Adoption/MainTextSection";

class News extends Component{
    render() {
        const { newsList } = this.props;
        return(
            <main className='news-section' id='newstag'>
                    <MainTextSection text={'AKTUALNOŚCI'}/>
                    <div className='news-and-photo'>
                        <NewsItems newsList={newsList}/>
                </div>
            </main>
        )
    }
}

export default News