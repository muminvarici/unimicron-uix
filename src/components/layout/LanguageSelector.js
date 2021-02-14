import React from 'react';
import Select from '../elements/Select';

const languages = [
    { code: 'en', name: 'English' },
    { code: 'rus', name: 'Русский' },
    { code: 'deu', name: 'Deutsch' }
]

const translations = {
    'en': {
        'header': 'Spring',
        'paragraf': 'Hello',
        'lang-choice': 'Choose your language:'
    },
    'deu': {
        'header': 'Frühling',
        'paragraf': 'Hallo',
        'lang-choice': 'Wählen Sie Ihre Sprache:'
    },
    'rus': {
        'header': 'Весна',
        'paragraf': 'Привет',
        'lang-choice': 'Выберите ваш язык:'
    }
}

const getTranslation = (lang, text) => {
    return translations[lang][text];
}

export class LanguageSwitcher extends React.Component { 
    changeLanguageHandler = (lang) => {
        this.setState({ lang: lang });
    }

    render() {
        console.log(this.state);
        return (
            
            <div className="languageSelector">
                <Select class="form-select" id="color" size="sm" onChange={this.onChange}  >
                    <option vlaue="en" >EN</option>
                    <option vlaue="tr" >TR</option>
                    <option vlaue="de" >DEU</option>
                </Select>
            </div>
        )
    }
    onChange = e => {
        this.props.handleChangeLanguage && this.props.handleChangeLanguage(e.target.className);
        console.log("language switched to", e.target.value);
    }
}