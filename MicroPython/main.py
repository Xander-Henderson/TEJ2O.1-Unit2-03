"""
Created by: Alexander
Created on: Sep 2025
This module is a Micro:bit MicroPython program that shows area and perimeter.
"""

from microbit import *

display.clear()
sleep(1)

# dimensions
display.scroll("A rectangle has the of dimensions 5 cm & 3 cm.")
sleep(0.5)
display.clear()

#area
display.scroll("The area would be: " + str (5 * 3) + "cm^2")
display.show(Image.HAPPY)
sleep(0.5)
display.clear()

#perimeter
display.scroll("The perimeter would be: " + str (2 * (5 + 3)) + "cm")
display.show(Image.HAPPY)
sleep(0.5)
display.clear()
