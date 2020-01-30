import React, {Component} from "react";
import NewsItem from "./NewsItem";

class NewsItems extends Component {
    render() {
        const { newsList } = this.props;

        return (
            <>
                {
                    newsList.map(el => <NewsItem key={el.id} SingleNews={el}/>)
                }
            </>
        )
    }
}

export default NewsItems