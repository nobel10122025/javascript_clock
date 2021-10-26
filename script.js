const secondHand = document.querySelector(".second-hand")
const minHand = document.querySelector(".min-hand")
const hourHand = document.querySelector(".hour-hand")

const setTime = () => {
    const now = new Date()
    const second = now.getSeconds()
    const secDeg = ((second / 60) * 360 ) + 90
    secondHand.style.transform= `rotate(${secDeg}deg)`

    const minute = now.getMinutes()
    const minDeg = ((minute / 60) * 360 ) + ((second/60)*6) + 90
    minHand.style.transform= `rotate(${minDeg}deg)`

    const hour = now.getHours()
    const hourDeg = ((hour / 12) * 360 ) + ((minute/60)*30) + 90
    hourHand.style.transform= `rotate(${hourDeg}deg)`
}

setInterval(setTime,1000)