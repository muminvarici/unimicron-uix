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
    const keys = textId?.split(".") ?? textId;

    let element = languageContext?.dictionary;
    for (let index = 0; index < keys.length; index++) {
        const key = keys[index];
        if (element[key] && typeof element[key] === 'string') {
            return element[key];
        }
        element = element[key];
    }
    return textId;
};
