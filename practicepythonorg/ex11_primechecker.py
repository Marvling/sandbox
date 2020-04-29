#%%
def primality(usr_inp):
    usr_inp = int(usr_inp)
    ran = range(1,10000)

    li = [i for i in ran if usr_inp % i == 0]

    if usr_inp == 1:
        print(f'{usr_inp} is not prime')
    elif usr_inp == 2:
        print(f'{usr_inp} is prime')
    elif len(li) == 2:
        print(f'{usr_inp} is prime')
    else:
        print(f'{usr_inp} is not prime')

primality (input('type a number'))

# %%
from math import sqrt

def is_prime(n):
    if (n <= 1):
        return False
    if (n == 2):
        return True
    if (n % 2 == 0):
        return False

    i = 3
    while i <= sqrt(n):
        if n % i == 0:
            return False
        i = i + 2

    return True

is_prime(int(input('type a')))

# %%
