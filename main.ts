input.buttonA.onEvent(ButtonEvent.Click, function () {
    light.showAnimation(light.rainbowAnimation, 1000)
    light.setAll(0x000000)
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    light.showAnimation(light.theaterChaseAnimation, 1000)
    light.setAll(0x000000)
})
light.showAnimation(light.rainbowAnimation, 500)
light.setAll(0x000000)
