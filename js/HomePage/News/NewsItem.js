import React, {Component} from "react";

class NewsItem extends Component{
    render() {

        const {title, photo, text, photoDescription} = this.props.SingleNews;

        return(
            <div className='news'>
                <h3 className='news-title'>{title}</h3>
                <img className='news-image' src={photo} alt={photoDescription}/>
                <p className='news-description'>{text}</p>
            </div>
        )
    }
}

export default NewsItem