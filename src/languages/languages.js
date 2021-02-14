import tr from './tr.json';
import en from './en.json';
import de from './de.json';

export const dictionaryList = { en, tr, de };

export const languageOptions = {
    en: 'EN',
    tr: 'TR',
    de: 'DE'
};

export function getLanguageText({ languageContext, textId }) { 
    return languageContext?.dictionary[textId] || textId;
};