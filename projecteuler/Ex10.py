#Find the sum of all the primes below two million.

import os
import sys

os.chdir('/Users/sinanozer/Dropbox/Sides/python_sandbox/projecteuler')
sys.path.insert(1, '/Users/sinanozer/Dropbox/Sides/python_sandbox/')

from numbers import prime_generator

print(sum(prime_generator(range(2000000))))

