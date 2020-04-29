from math import log

#What is the largest prime factor of the number 600851475143 ?
#prime factors of 6 = 3,2

def prime_factor (x):
    # This tries to divide the sallest number by 4 even if it was divided by 2 twice
    #TODO make if statetemts that checks of the factors list has previous numbers so it doesnt have to check
    i = 2
    factors = []

    while x != 1:
        if x % i == 0:
            if  log(i, 2) in factors:
                break
            else:
                factors.append(i)
                x = x/i
        else:
            i = i + 1
    
    return factors

if __name__ == "__main__":
    a = prime_factor(6)
    print(a)
    print(a[-1])

