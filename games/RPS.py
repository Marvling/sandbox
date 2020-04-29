#%%

import getpass

print('Welcome to RPS \n\n Rock = R \n Paper = P \n Scissors = S \n')

p1_score = 0
p2_score = 0

q = ""

while q != 'q':

    inp_p1 = getpass.getpass('Player 1 enter your input now.')
    inp_p2 = getpass.getpass('Player 2 enter your input now.')

    if inp_p1 == inp_p2:
        print("it's a tie")
        pass

    elif inp_p1 == 'R' :
        if inp_p2 == 'S':
            print('player 1 wins')
            p1_score += 1
        else:
            print('player 2 wins')
            p2_score += 1

    elif inp_p1 == 'P':
        if inp_p2 == 'R':
            print('player 2 wins')
            p2_score += 1
        else:
            print('player 1 wins')
            p1_score += 1

    else:
        if inp_p2 == 'P':
            print('player 1 wins')
            p1_score += 1
        else:
            print('player 2  wins')
            p2_score += 1

    print(f'\nCurrent score is\nPlayer 1 ={p1_score}\nPlayer 2 ={p2_score}\n')
    q = input('To continue press enter\ntype "q" to quit,\n')




# %%
