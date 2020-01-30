import React, {Component} from 'react';

class Footer extends Component{
    render() {
        const { phoneNumber, emailAddress, street, city, streetGoogle, facebook, instagram } = this.props;
        return(
            <footer>
                <div className='container'>
                    <div className='contact'>
                        <a href={`tel:${phoneNumber}`}><p>Tel.: {phoneNumber}</p></a>
                        <a href={`mailto:${emailAddress}`}><p>E-mail: {emailAddress}</p></a>
                        <a href={streetGoogle}><p>{city}, {street}</p></a>
                    </div>
                    <div className='social-media'>
                        <a href={facebook}><p><img src="https://img.icons8.com/office/30/000000/instagram-new.png"/></p></a>
                        <a href={instagram}><p><img src="https://img.icons8.com/officel/30/000000/facebook-new.png"/></p></a>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer
