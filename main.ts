/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Alexander
 * Created on: Sep 2025
 * This program shows the area and the perimeter of a rectangle.
*/

basic.clearScreen()
basic.pause(1000)

//dimensions
basic.showString('A rectangle has the of dimensions 5 cm & 3 cm.')
basic.pause(100)
basic.clearScreen()

//area
basic.showString('The area would be: ' + (5 * 3).toString() + 'cm^2')
basic.showIcon(IconNames.Happy)
basic.pause(100)
basic.clearScreen()

//perimeter
basic.showString('The perimeter would be: ' + (2 * (5 + 3)).toString() + 'cm')
basic.showIcon(IconNames.Happy)
basic.pause(100)
basic.clearScreen()
