import React, {Component} from "react";

class ContactForm extends Component {

    state = {
        name: "",
        email: "",
        message: '',
        errors: [],
        endText: "",
        petName: this.props.petNameVal
    };

    handleChangeEmail = (e) => {
        this.setState( {
            email: e.target.value
        })
    };

    handleChangeMessage = (e) => {
        this.setState( {
            message: e.target.value
        })
    };

    handleChangeName = (e) => {
        this.setState( {
            name: e.target.value
        })
    };

    handleSubmit = (e) => {
        const {name, email, message} = this.state;
        e.preventDefault();
        let errors = [];

        if(name.length < 3){
            errors.push("Pole musi zawierać przynajmniej 3 znaki")
        }

        if (email.length < 3 && email.indexOf("@") < 0) {
            errors.push("Pole email musi zawierać znak @ i co najmniej 3 znaki");
        }

        if (message.length <= 0) {
            errors.push("Pole wiadomość nie może być puste");
        }

        this.setState( {
            errors
        });

        if (errors.length === 0) {
            this.setState({
                endText: "Dziękujemy za wiadomość",
                name: "",
                email: "",
                message: "",
                errors: ""
            })
        }
    };

    render() {

        let errorsJsx = null;
        let errorsStyle = {color: "red", fontSize: '12px'};
        if (this.state.errors.length) {
            errorsJsx = <ul>{this.state.errors.map((el, i) =>
                <li key={i} style={errorsStyle}>{el}</li>
            )}
            </ul>
        }

        let petName = null;
        if (this.state.petName){
            petName = <input className='pet-name' type='text' value={this.state.petName}/>
        }

        return (
            <div className='form-contact'>
            <form method="POST" onSubmit={this.handleSubmit}>
                {errorsJsx}
                <h1 style={{color: "green"}}>{this.state.endText}</h1>
                <label>Formularz Kontaktowy</label>
                <input
                       type="text"
                       placeholder="Imię i nazwisko"
                       onChange={this.handleChangeName}
                       value={this.state.name}/>
                <input
                       placeholder="Twój e-mail"
                       type="email"
                       onChange={this.handleChangeEmail}
                       value={this.state.email}/>
                {petName}
                <textarea
                          placeholder="O co chcesz zapytać?"
                          type="text"
                          onChange={this.handleChangeMessage}
                          value={this.state.message}/>
                <button className='form-button'
                        type="submit">Wyślij!</button>
            </form>
            </div>
        )
    }
}

export default ContactForm