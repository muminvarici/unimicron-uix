import React, { useContext } from 'react';
import { LanguageContext } from '../../App';
import { languageOptions } from '../../languages/languages';
import Select from '../elements/Select';

export default function LanguageSwitcher() {
    const { userLanguage, userLanguageChange } = useContext(LanguageContext);

    // set selected language by calling context method
    const handleLanguageChange = e => userLanguageChange(e.target.value);

    return (
        <Select id="color" size="sm" onChange={handleLanguageChange} value={userLanguage} >
            {/* <option vlaue="en" >EN</option>
            <option vlaue="tr" >TR</option>
            <option vlaue="de" >DEU</option> */}
            {Object.entries(languageOptions).map(([id, name]) => (
                <option key={id} value={id}>{name}</option>
            ))}
        </Select>
    ) 
}