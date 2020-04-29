#https://projecteuler.net/problem=12
import sys
sys.path.insert(1, '/Users/sinanozer/Dropbox/Sides/python_sandbox/')

def factors (n):
    factors = []

    for i in range(1,n+1):
        if n % i == 0:
            factors.append(i)
    return factors            

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

# def solution (x):
#     a = 3
#     i = triangular_int(a)

#     while len(factors(i)) < x:
#         a + 1
#     return

# x = 1
# while len(factors(sum(range(x)))) < 500:
#     x += 1
# print(x)

if __name__ == "__main__":
    a = 3
    i = triangular_int(a)

    while len(factors(i)) < 10:
        a + 1
    print(a)