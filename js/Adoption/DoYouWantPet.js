import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../../sass/main.scss';

class DoYouWantPet extends Component{
    render() {

        return(
            <div className='pet-all-about'>
                <p className='do-you-want-adopt-text'>CHCESZ ADOPTOWAĆ?</p>
                <div className='pet-form-container'>
                    <div className='text-about-pet-button'
                         onClick={()=>this.props.showOrHideForm(this.props.id)}>Napisz</div>
                    <div className='show-or-hide-phone-button'>
                        {this.props.showPhone?
                            <div onClick={()=>this.props.showOrHidePhone(this.props.id)}>413616724</div>:
                            <div onClick={()=>this.props.showOrHidePhone(this.props.id)}>Zadzwoń</div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default DoYouWantPet