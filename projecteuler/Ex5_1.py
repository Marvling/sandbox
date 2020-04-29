# k = 20
# N = 1
# i = 1
# check = true
# limit = sqrt(k)
# while p[i] <= k
#  a[i] = 1
#  if check then
#  if p[i] <= limit then
#  a[i] = floor( log(k) / log(p[i]) )
#  else
#  check = false
#  end if
#  end if
#  N = N * p[i] ^ a[i]
#  i = i + 1
# end while
# output N 

from math import sqrt
from math import log

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

def prime_finder (n):
    p_numbers = [2,3,5,7,11,13,17,19,23,29,31]
    return p_numbers[n-1]

