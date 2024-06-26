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
let checkingWhichDoorNewDoorWasPicked: number = null

// loop
while (true) {
  // play game 1000 times and always switch door
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

      // keep track how many times you won
      if (doorSwitched == winningDoor) {
        winCounter = winCounter + 1
      }

      // loopCounter
      loopCounter = loopCounter + 1
    }
  }

  // play game a 1000 times but only switch somtimes
  if (input.buttonIsPressed(Button.B) == true) {
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
      if (wrongDoorRevealed == 1) {
        doorSwitched = randint(2, 3)
      }

      // find out wether you switch or not
      if (wrongDoorRevealed == 2) {
        checkingWhichDoorNewDoorWasPicked = randint(1,2) 
        if (checkingWhichDoorNewDoorWasPicked == 1) {
          doorSwitched = 1
        }
        if (checkingWhichDoorNewDoorWasPicked == 2) {
          doorSwitched = 3
        }
      }
      if (wrongDoorRevealed == 3) {
        doorSwitched = randint(1,2)
      }

      // to keep track of how many times you win
      if (doorSwitched == winningDoor) {
        winCounter = winCounter + 1
      }
      // loopCounter
      loopCounter = loopCounter + 1
    }
  }
  
  // show how many times you won
  if (winCounter > 0) {
    basic.showNumber(winCounter)
  }
}
