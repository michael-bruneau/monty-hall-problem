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
let doorPicked: number = null
let wrongDoorRevealed: number = null
let doorSwitched: number = null
let winCounter: number = null
let loopCounter: number = 0

while (true) {
  if (input.buttonIsPressed(Button.A) == true) {
    while (loopCounter <= 1000) {
      // picks random door
      winningDoor = randint(1, 3)

      // find out were loosingDoor1 is
      if (winningDoor - 1 > 0) {
        lossingDoor1 = 1
      } else {
        lossingDoor1 = 2 
      }

      // find out were lossingDoor2 is
      lossingDoor2 = 6 - lossingDoor1 - winningDoor

      // doorPicked
      doorPicked = randint(1, 3)

      // the wrong door that is revealed
      if (doorPicked - 1 > 0) {
        if (winningDoor - 1 > 0) {
          wrongDoorRevealed = 1
        }
      }
      if (doorPicked - 2 > 0 || doorPicked - 2 < 0) {
        if (winningDoor - 2 > 0 || winningDoor - 2 < 0) {
          wrongDoorRevealed = 2
        }
      }
      if (doorPicked - 3 > 0 || doorPicked - 3 < 0) {
        if (winningDoor - 3 > 0 || winningDoor - 3 < 0) {
          wrongDoorRevealed = 3
        }
      }

      // doorSwitched
      doorSwitched = 6 - doorPicked - wrongDoorRevealed

      if (doorSwitched == winningDoor) {
        winCounter = winCounter + 1
      }
    }
  }

  if (input.buttonIsPressed(Button.B) == true) {
    basic.showNumber(winCounter)
  }
}
