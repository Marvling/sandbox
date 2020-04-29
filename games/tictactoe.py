
def game_init():

    tokens={'q':'q', 'w':'w', 'e':'e', 'a':'a', 's':'s', 'd':'d', 'z':'z', 'x':'x', 'c':'c'}

    gameboard = f'{tokens["q"]} | {tokens["w"]} | {tokens["e"]}\n----------\n\
{tokens["a"]} | {tokens["s"]} | {tokens["d"]}\n----------\n\
{tokens["z"]} | {tokens["x"]} | {tokens["c"]}\n'

    return gameboard,tokens
    

def set_player():

    b = game_init()
    gameboard,tokens= b[0],b[1]

    p1= input('Player One, type "O" if you want to be "O" \nType "X if you want to be "X"')

    while p1 != 'X' and p1 != 'O':

        p1= input('You have entered and incorrect character\n\
            Player One, type "O" if you want to be "O" \nType "X if you want to be "X"')

    if p1 == 'X':
        p2 = 'O'
        print('Player Two, you are "O"')

    if p1 == 'O':
        p2 = 'X'
        print('Player Two, you are "X"')

    player_counter = 0
    player_active = p1

    print(gameboard)
    # tokens = {key: ' ' for key in tokens}

    return gameboard,tokens,player_active,player_counter,p1,p2 

def player_turn(gameboard, tokens,  player_active, player_counter, p1, p2):

    if (player_counter %2) == 0:
        player_active = p1
    else:
        player_active = p2

    player_input = input(f'"{player_active}", type the letter for the loaction you want to play')

    while player_input not in list(tokens.keys()):
        print('you have entered an inavlid value\nPlease enter either q,w,e,a,s,d,z,x, or c')
        player_input = input(f'{player_active}, type the letter for the loaction you want to play')
    
    tokens[player_input] = player_active
    gameboard = f'{tokens["q"]} | {tokens["w"]} | {tokens["e"]}\n----------\n\
{tokens["a"]} | {tokens["s"]} | {tokens["d"]}\n----------\n\
{tokens["z"]} | {tokens["x"]} | {tokens["c"]}\n'
    
    print(gameboard)

    player_counter = player_counter + 1

    return gameboard,tokens,player_active,player_counter

def win_checker (tokens):

    winstate = False

    if tokens['q'] == tokens['w'] == tokens ['e'] or tokens['a'] == tokens['s'] == tokens ['d'] or\
        tokens['z'] == tokens['x'] == tokens ['c'] or tokens['q'] == tokens['a'] == tokens ['z'] or\
        tokens['w'] == tokens['s'] == tokens ['x'] or tokens['e'] == tokens['d'] == tokens ['c'] or\
        tokens['q'] == tokens['s'] == tokens ['c'] or tokens['e'] == tokens['s'] == tokens ['z']:
        
        winstate = True
    
    return winstate


def gameplay (tokens=None ,winstate=False):

    a = set_player()
    #for updating the gameboard
    gameboard = a[0]
    tokens = a[1]
    player_active = a[2]
    player_counter = a[3]
    print(player_active,player_counter)

    while winstate != True:
        c = player_turn(gameboard, tokens, player_active, player_counter, a[4], a[5])
        gameboard = c[0]
        tokens = c[1]
        player_counter=c[3]
        player_active =c[2]
        
        print(player_active,player_counter)

        winstate = win_checker(tokens)
    
    print(f'congrats "{player_active}", You win!')
    pass

if __name__ == '__main__':

    gameplay()

