import React, { useState, useEffect } from 'react';
import { LoaderContainer, WordFixed, Word, WordsContainer, Card } from '../styles/TextLoaderStyle';
import { useTranslation } from 'react-i18next';

const TextLoader = () => {
    
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setShowLanguages(false);
    };
    
    const words = [t('racing'), t('rise'), t('experience'), t('atthetop')];

    const [currentWord, setCurrentWord] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWord((prevWord) => (prevWord + 1) % words.length);
        }, 3000);
        return () => clearInterval(interval);
        }, []);

    return (
        <Card>
            <LoaderContainer>
                <WordFixed>Mahindra</WordFixed> 
                <WordsContainer>
                    <Word key={currentWord}>{words[currentWord]}</Word>
                </WordsContainer>
            </LoaderContainer>
        </Card>
    );
};

export default TextLoader;
