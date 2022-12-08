function wrapping(gifts) {
    const wrapped = gifts.map(gift => {
        let letters = gift.split("")
        letters.push("*\n")
        letters.unshift("\n*")
        letters.forEach(() => {
            letters.push("*")
            letters.unshift("*")
        })
        return letters.join("")
    })
    return wrapped
}
const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

console.log(wrapped)