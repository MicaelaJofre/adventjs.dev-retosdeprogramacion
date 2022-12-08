function countHours(year, holidays) {
    let days = 0
    holidays.forEach(holiday => {
        let day = new Date(`${holiday}/${year}`)
        console.log(day)

        if (day.getDay() !== 0 && day.getDay() !== 6) days++
    })
    let extras = days * 2
    return extras
}
const year = 2022
const holidays = ['01/06', '04/01', '12/25', '12/10', '01/07']

const other = countHours(year, holidays)
console.log(other)