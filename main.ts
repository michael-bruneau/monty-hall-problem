/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Michael Bruneau
 * Created on: May 2024
 * This program runs simulator of monty hall problem
*/

// variables
let winningDoor: number = null
let lossingDoor1: number = null
let lossingDoor2: number = null

while (true) {
  if (input.buttonIsPressed(Button.A) == true) {
    // picks random door
    winningDoor = randint(1, 3)
    basic.showNumber(winningDoor)

    // find out were loosingDoor1 is
    if (winningDoor - 1 > 0) {
      lossingDoor1 = 1
    } else {
      lossingDoor1 = 2 
    }

    lossingDoor2 = 6 - lossingDoor1 + winningDoor
  }
}
