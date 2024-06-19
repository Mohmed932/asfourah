export const calculateReadingTime = (desc) => {
    if (!Array.isArray(desc)) {
        throw new Error('Input must be an array');
    }
    
    let wordCount = 0;
    desc.forEach(e => {
        if (e) {
            wordCount += e.split(" ").length;
        }
    });

    const wordsPerMinute = 400;
    const timeInMinutes = wordCount / wordsPerMinute;
    return Math.ceil(timeInMinutes);
};
