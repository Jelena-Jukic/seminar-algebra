const adjectives = ['mala', 'plava', 'velika','crna' ,'zgužvana'];
const nouns = ['Jelena', 'Proba', 'Edukacija','Polaznica','Pobjednica'];

export function getRandomName() {
    const adjectiveIndex = Math.floor(Math.random() * adjectives.length);
    const nounIndex = Math.floor(Math.random() * nouns.length);

    return `${adjectives[adjectiveIndex]} ${nouns[nounIndex]}`;
}
