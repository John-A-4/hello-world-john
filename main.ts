basic.forever(function () {
    basic.showString("Hello!, John!")
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # # . # #
        . # # # .
        `)
})
