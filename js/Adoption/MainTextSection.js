import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../../sass/main.scss';

class MainTextSection extends Component{
    render() {
        const {text} = this.props;

        return(
            <div className='name-of-category-container'>
                <h2 className='name-of-category-text'>{text}</h2>
            </div>
        )
    }
}

export default MainTextSection