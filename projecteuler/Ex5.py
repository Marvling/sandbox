from itertools import groupby

def prime_factor (x):
    i = 2
    factors = []

    while x != 1:
        if x % i == 0:
            factors.append(i)
            x = x/i
        else:
            i = i + 1
    
    return factors

def smallest (l):
    # Put all prime factors inside a list ✓
    # check if the list has any duplicates
        #if yes, find maximum consecutive occurances of that number
            #put x**(number of consecutive occurances) to a nother list
        #if no put that number into that list
    # mltiply everything in the list

    l_prime = []
    l_powers = []

    a = len(l) - 1
    
    while a != 0:
        factors = prime_factor(l[a])
        if len(factors) == 1:
            l_prime.extend(factors)
        elif factors[1:] == factors[:-1]:
            l_powers.append(factors)
        else:
            pass
        a = a - 1

    l_final = []
    for removed, grp in groupby(sorted(l_powers, key=lambda x: x[0]), key=lambda x: x[0]):
        l_prime.remove(removed)
        grp = list(grp)
        l_final.extend(grp[0])
    
    result = 1
    for i in l_final + l_prime:
        result *= i

    return result

if __name__ == "__main__":
    l = (list(range(1, 11)))
    print(smallest(l))
# %%
