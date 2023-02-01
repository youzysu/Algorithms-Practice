function solution(s) {
    const words = s.split(' ')
    console.log(words)
    return words.map((word) => {
        let transform = []
        for (let i = 0; i < word.length; i++) {
            if (i % 2 === 0) transform.push(word[i].toUpperCase())
            else transform.push(word[i].toLowerCase())
        }
        return transform.join('')
    }).join(' ')
}