import React, { useState, useEffect } from 'react';
import { LoaderContainer, WordFixed, Word, WordsContainer, Card } from '../styles/TextLoaderStyle';

const words = ['Racing', 'Rise', 'App Mobile', 'Experience', 'At the top'];

const TextLoader = () => {
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
