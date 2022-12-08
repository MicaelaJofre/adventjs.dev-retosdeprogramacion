function distributeGifts(packOfGifts, reindeers) {
    let cantGift = 0
    let cantReindeer = 0
    packOfGifts.forEach(gift => {
        cantGift += gift.length
    })
    reindeers.forEach(reindeer => {
        cantReindeer += reindeer.length * 2
        console.log(cantReindeer)
    })
    return Math.floor(cantReindeer / cantGift)
}
const packOfGifts = ["book", "doll"]
const reindeers = ["dasher", "dancer"]

// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos

let res = distributeGifts(packOfGifts, reindeers) // 2
console.log(res)