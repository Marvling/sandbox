from random import randint
import json
import os
from pprint import pprint


def guessingGame(startRange, endRange, quitKeys=['q', 'Q', 'Exit', 'exit'], debugPrints=False):
    target = randint(startRange, endRange)
    counter = 0

    inputStr = None
    print('Q means exit')
    if debugPrints:
        print(target)
    while inputStr not in quitKeys:
        inputStr = input(f'Guess between {startRange}, {endRange} including them: ')
        if inputStr.isdigit():
            counter += 1
            inputInt = int(inputStr)
            if inputInt == target:
                return counter
            elif inputInt < startRange:
                inputInt = startRange
            elif inputInt > endRange:
                inputInt = endRange
            else:
                if inputInt < target:
                    startRange = inputInt + 1
                else:
                    endRange = inputInt - 1
        elif inputStr not in quitKeys:
            print("Didn't understand that...")
    
    return counter * -1


def scoreBoard(userName, count):
    if count < 0:
        print('You fail')
    elif count == 0:
        print("didn't even...")
    else:
        print(f'\\o/ {count}')

    if count <= 0:
        return

    scoreBoard = None
    scoreBoardFilePath = os.path.join(os.path.dirname(__file__), 'scoreboard.json')
    if os.path.exists(scoreBoardFilePath):
        with open(scoreBoardFilePath, 'r') as fp:
            scoreBoard = json.load(fp)
    else:
        # if in future format of scoreboard file changes
        # we can support backwards compat by version number
        # which is int
        scoreBoard = {'version': 0, 'users': {}}

    if userName in scoreBoard['users']:
        if scoreBoard['users'][userName] > count:
            scoreBoard['users'][userName] = count
    else:
        scoreBoard['users'][userName] = count


    with open(scoreBoardFilePath, 'w') as fp:
        json.dump(scoreBoard, fp)

    pprint(scoreBoard['users'])


    userName = input('Username: ')
    count = guessingGame(1, 1000)
    scoreBoard(userName, count)
