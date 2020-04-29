# get user input
# check if it is integer

#%%
import random
q = ''
rando = random.randint(1,9)
print(rando)
player_input =''
counter = 0
a = 1

result_correct = False
while q != 'q':
    while type(player_input) != int or a > 10:
        player_input = input('type a number 1 and 10\n')

        if player_input.isdigit():
            player_input = int(player_input)
            a = player_input

            if 0 < player_input < 10:
                break
            else:
                print("number isn't in range")
        
        else:
            print("you didn't type a number, try again")

    print(f'your nmuber is {player_input}\n')

    if player_input < rando:
        player_input = input('type a number 1 and 10\n')
        print('Wrong guess, guess higher')
        counter += 1
    elif player_input > rando:
        player_input = input('type a number 1 and 10\n')
        print('Wrong guess, guess higher')
        counter += 1
    else:
        print(f"congrats you won in {counter} tries\nThe number was {rando}")
        q = input("\nType 'q' to quit\nPress enter to play again\n")


