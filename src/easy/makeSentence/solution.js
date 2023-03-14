function makeSentence(inputSentence) {
    const firstLetter = inputSentence[0].toUpperCase();
    const remainingLetters = inputSentence.slice(1, inputSentence.length);
    const newSentence = `${firstLetter}${remainingLetters}`;
    if (newSentence[newSentence.length - 1] === "." ||
        newSentence[newSentence.length - 1] === "!" ||
        newSentence[newSentence.length - 1] === "?"
    ) {
        return newSentence
    } else {
        return `${newSentence}.`
    } 
}

console.log(makeSentence("hello there!"))