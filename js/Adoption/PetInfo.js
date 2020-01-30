import React, {Component} from "react";
import DoYouWantPet from "./DoYouWantPet";
import ContactForm from "../ContactForm";

class PetInfo extends Component{
    state = {
        extended: {},
        extendForm: {},
        showPhone: {},
        indexImage: {}
    };

    showOrHidePetDescription = (id) => {

        this.setState({
            extended: {...this.state.extended, [id]:!this.state.extended[id]}
        });
    };

    showOrHideForm = (id) => {

        this.setState({
            extendForm: {...this.state.extendForm, [id]:!this.state.extendForm[id]}
        });
    };

    showOrHidePhone = (id) => {

        this.setState({
            showPhone: {...this.state.showPhone, [id]:!this.state.showPhone[id]}
        });
    };


    printNextImage = (e, id, max) => {
        e.stopPropagation();
        if (!this.state.indexImage[id]){

            this.setState({
                indexImage:{...this.state.indexImage, [id]:1}
            })

        } else{
            let index = this.state.indexImage[id]+1;
            if (index >= max){
                index = 0;
            }
            this.setState({
                indexImage:{...this.state.indexImage, [id]:index}
            })
        }
    };

    getCurrentImage = (id, images, max) => {
        if(this.state.indexImage[id] === max){
            this.state.indexImage[id] = this.state.indexImage[0];
        }

        if (!this.state.indexImage[id]){
            return images[0]
        }
        return images[this.state.indexImage[id]]
    };

    printPrevImage = (e, id, max) => {
        e.stopPropagation();
        if (!this.state.indexImage[id]){

            this.setState({
                indexImage:{...this.state.indexImage, [id]:1}
            })

        } else{
            let index = this.state.indexImage[id]+1;
            if (index <= max){
                index = 0;
            }
            this.setState({
                indexImage:{...this.state.indexImage, [id]:index}
            })
        }
    };

    render() {
        const {animals} = this.props;
        
        return(
            <>
                {animals.map(el => {

                    return(<React.Fragment key={el.id}>
                        <div className='pet'>
                            <div className='name-pet'>{el.name}</div>
                            <div className='main-photo-pet' onClick={()=>this.showOrHidePetDescription(el.id)}>
                                <button className='prev'
                                        onClick={(e) => this.printPrevImage(e, el.id, el.image.length)}
                                       />
                                <img src={this.getCurrentImage(el.id, el.image, el.image.length)} />
                                <button className='next'
                                        onClick={(e) => this.printNextImage(e, el.id, el.image.length)}/>
                                <p className='on-img-text'>Info</p>
                            </div>
                            <div className={this.state.extended[el.id] ? 'info-pet' : 'display-none'}>
                                <div className='category-pet-info'>
                                    <p className='pet-attributes'>Rasa: {el.race}</p>
                                    <p className='pet-attributes'>Płeć: {el.gender}</p>
                                    <p className='pet-attributes'>Wiek: {el.age}</p>
                                    <p className='pet-attributes'>Wielkość: {el.size}</p>
                                </div>
                                <div className='description-pet'>
                                    <p>{el.description}</p>
                                </div>
                            </div>
                            <DoYouWantPet showOrHideForm={this.showOrHideForm} id={el.id} showPhone={this.state.showPhone[el.id]} showOrHidePhone={this.showOrHidePhone}/>
                            <div className={this.state.extendForm[el.id] ? 'form-in-pet' : 'display-none'}>
                                <ContactForm petNameVal={el.name}/>
                            </div>
                        </div>
                    </React.Fragment>)})
                }
            </>
        )
    }
}

export default PetInfo