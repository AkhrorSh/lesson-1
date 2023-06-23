let now = new Date().getTime()

// Задание 1 (будильник)

let deadline = "2023-06-23 18:20"

let alarm = Date.parse(deadline) - now

let alarmHour = Math.floor((alarm / (1000 * 60 * 60)) % 24)
let alarmMin = Math.floor((alarm / (1000 * 60)) % 60)

if (alarm <= 0) {
    alert('wake up')
    let alarmTime = prompt(`
        Напешите '1' чтобы перенести на 5 минут,
        или '0' чтобы остановить
    `) 
    if (alarmTime === '1') {

        let deadline = "2023-06-23 18:25"

        let alarm = Date.parse(deadline) - now

        if (alarm <= 0) { 
            alert('wake up')
        }
        // Я не смог зделать так чтобы цикл повторялся
    } else if (alarmTime === '0') {
        alert('good')
    } else {
        alert('error')
    }
} else {
    alert(`до срока осталось ${alarmHour} час ${alarmMin} минут `)
}
 
// Задание 2 (какое сейчас время)

let nowInHours = new Date().getHours()

let name = prompt('write your name')

if (nowInHours >= '22' || nowInHours <= '4') {
    console.log('good night' + name);
} else if (nowInHours > 4 && nowInHours < 12) {
    console.log('good morning' + name);
} else if (nowInHours > 12 && nowInHours < 16) {
    console.log('вахти абед' + name);
} else if (nowInHours > 16 && nowInHours < 22) {
    console.log('good evening' + name);
}



// Math.floor(alarm / (1000 * 60 * 60 * 24)),
// Math.floor((alarm / (1000 * 60 * 60)) % 24),
// Math.floor((alarm / (1000 * 60)) % 60),
// Math.floor((alarm / (1000 )) % 60),