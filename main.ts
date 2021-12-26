input.onButtonPressed(Button.A, function () {
    led.plot(0, 0)
    led.plot(1, 1)
    led.plot(2, 2)
    led.plot(3, 3)
    led.plot(4, 4)
})
input.onButtonPressed(Button.AB, function () {
    pause2 = !(pause2)
    if (pause2) {
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    led.unplot(0, 0)
    led.unplot(1, 1)
    led.unplot(2, 2)
    led.unplot(3, 3)
    led.unplot(4, 4)
})
let yPos = 0
let xPos = 0
let pause2 = false
pause2 = false
basic.forever(function () {
    if (!(pause2)) {
        xPos = randint(0, 4)
        yPos = randint(0, 4)
        led.plot(xPos, yPos)
        basic.pause(10)
        led.unplot(yPos, xPos)
    }
})
