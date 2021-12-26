let pause2 = false
let xPos = 0
let yPos = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    for (let yPos = 0; yPos <= 4; yPos++) {
        for (let xPos = 0; xPos <= 4; xPos++) {
            led.plot(xPos, yPos)
            basic.pause(100)
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    pause2 = !(pause2)
    if (pause2) {
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    for (let yPos = 0; yPos <= 4; yPos++) {
        for (let xPos = 0; xPos <= 4; xPos++) {
            led.unplot(xPos, yPos)
            basic.pause(100)
        }
    }
})
basic.forever(function () {
	
})
basic.forever(function () {
    if (false) {
        xPos = randint(0, 4)
        yPos = randint(0, 4)
        led.plot(xPos, yPos)
        basic.pause(10)
        led.unplot(yPos, xPos)
    }
})
