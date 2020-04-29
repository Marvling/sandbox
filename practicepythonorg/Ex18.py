#For every digit that the user guessed correctly in the correct place, they have a “cow”. 
#For every digit the user guessed correctly in the wrong place is a “bull.”

#TODO use flagse to see if first number is 0

import random

def fourdigit_generator ():

    t1 = random.sample(range(0,9), 3)
    t2 = [x for x in range(1,9) if x not in t1]
    a = random.sample(t2,1)
    t1.insert(0, a[0])
    return t1
if __name__ == "__main__":

    #target = fourdigit_generator()
    target = [4,9,3,5]
    print(target)
    target_en = list(enumerate(target))
    print(target_en)

    inp_first = 0
    count = 0

    cows = []
    bulls = []

    while True:
        
        count += 1

        inp_first = int(input('enter a 4 digit number'))
        inp = list(str(inp_first))
        print(inp)
        inp_en = list(enumerate(inp))

        for a in target_en:
            if a in inp_en:
                cows.append(0)
                inp.remove(a[1])
       
        if len(inp) > 0:
            for a in inp:
                if a in target:
                    bulls.append(0)
            
            print(f'you have {len(cows)} cows')
            print(f'you have {len(bulls)} bulls')
            print(f'you guessed {count} times')
            cows = []
            bulls = []

        else:
            break

    print(f'Congrats! you won in {count} tries')