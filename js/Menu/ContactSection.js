import React, {Component} from 'react';

import Iframe from 'react-iframe';
import ContactForm from "../ContactForm";
import AdoptMainText from "../Adoption/MainTextSection";

class ContactSection extends Component{
    render() {

        return(
            <section className='contact-section'>
                <div className='container'>
                    <AdoptMainText text={'KONTAKT'}/>
                    <div className='section-container'>
                        <div className='section-text'>
                          <p className='contact-shelter-name'>NAZWA SCHRONISKA</p>
                            <p className='contact-all-text'>
                                Przykładowy tekst: Wydawanie zwierząt do adopcji odbywa się
                                od poniedziałku do niedzieli
                                w godzinach od 10:00 do 16:00.
                            </p>
                            <p className='contact-all-text'>
                                Telefon: 41-361-67-24 (w godzinach 8:00 - 16:00)
                            </p>
                            <p className='contact-all-text'>
                                lub
                            </p>
                            <p className='contact-all-text'>
                                517-666-545 (16:00 - 8:00) - tylko PILNE!
                            </p>
                            <p className='contact-all-text'>
                                Możesz się z nami skontaktować również poprzez adres e-mail: przykladowyEmail@email.pl lub
                            </p>
                            <p className='contact-form'>
                                <ContactForm/>
                            </p>
                            <p className='contact-all-text'>
                                Adres naszego biura:
                            </p>
                            <p className='contact-all-text'>
                                ul. Przykładowa 205 22-126 City
                            </p>
                            <p className='contact-all-text'>
                                Jak znaleźć nasze schronisko:
                            </p>
                            <div className='map'>
                                <Iframe
                                    src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.8484782319583!2d20.62247415154285!3d50.833970467436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47178849133f4c49%3A0x86cdcf9804bbf746!2sSchronisko%20Dla%20Zwierz%C4%85t!5e0!3m2!1spl!2spl!4v1576763191036!5m2!1spl!2spl"
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ContactSection
