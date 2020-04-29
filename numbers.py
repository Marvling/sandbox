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

def prime_generator(l: list):
    #outputs a list of prime numbers in a list of numbers
    out = []
    for i in l:
        if is_prime(i):
            out.append(i)
    return out

def primelister (n):
    #outputs a list of prime numbers len(n)
    l1 = [2,3,5]

    a = l1[-1] + 1

    b = 0
    k = l1[b]

    while len(l1) != n:
        while k != l1[-1]:
            if a % k == 0:
                a += 1
            else:
                b += 1
                k = l1[b]
        l1.append(a)
        a += 1
        b = 0
        k = l1[0]

    return l1

def prime_factor (x):
    #lists the prime factors of a given number
    i = 2
    factors = []

    while x != 1:
        if x % i == 0:
            factors.append(i)
            x = x/i
        else:
            i = i + 1
    
    return factors


def factors (n):
    factors = []

    for i in range(1,n+1):
        if n % i == 0:
            factors.append(i)
    return factors            


def fibgenerator_len (n):
    seq = [1,1,2]
    n = n-3

    while n != 0:
        a = seq[len(seq)-2]
        b = seq[len(seq)-1]
        seq.append(a+b)
        n = n - 1
        
    return seq

def fibgenerator_val (n):
    seq = [1,1,2]
    a = seq[-1]

    while n >= a:
        a = seq[len(seq)-2]
        b = seq[len(seq)-1]
        seq.append(a+b)
        a = seq[-1]
    seq.pop()
    return seq

def triangular_li (x):
    #use index in range
    a = list(range(3,40))
    t = [1,3]
    i = 0
    k = 0

    while len(t) != x:
        t.append(t[i+1] + a[k])
        i += 1
        k += 1
    return t

def triangular_int (x):
    #use index in range
    a = list(range(3,500))
    t = [1,3]
    i = 0
    k = 0

    while len(t) != x:
        t.append(t[i+1] + a[k])
        i += 1
        k += 1

    return t[-1]

if __name__ == "__main__":
    print(triangular_int(3))