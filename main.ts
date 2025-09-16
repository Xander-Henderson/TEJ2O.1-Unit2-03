/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Alexander
 * Created on: Sep 2025
 * This program shows the area and the perimeter of a rectangle.
*/


basic.pause(1000)
basic.clearScreen()

//dimensions
basic.showString('A rectangle has dimensions 5 cm & 3 cm.')
basic.pause(100)
basic.clearScreen()

//area
basic.showString('The area would be: ' + (5 * 3).toString() + 'cm^2')
basic.showIcon(IconNames.Happy)
basic.pause(100)
basic.clearScreen()

//perimeter
basic.showString('The perimeter would be: ' + ((5 * 2) + (3 * 2)).toString() + 'cm')
basic.showIcon(IconNames.Happy)
basic.pause(100)
basic.clearScreen()
