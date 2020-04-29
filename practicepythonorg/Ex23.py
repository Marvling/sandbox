import os
import sys

os.chdir('/Users/sinanozer/Dropbox/Sides/python_sandbox/practicepythonorg')
sys.path.insert(1, '/Users/sinanozer/Dropbox/Sides/python_sandbox/')

from numbers import prime_generator

with open ('ex23-prime.txt', 'w') as fp_prime:
    prime_list = prime_generator(range(1000))
    c = 0
    for i in range(len(prime_list)) :
        fp_prime.writelines(f'{str(prime_list[c])}\n')
        c += 1

with open ('ex23-hap.txt','r') as fp_hap:
    hap_list = []
    lines = fp_hap.readlines()

    for i in lines:
        i = int(i)
        hap_list.append(i)

overlap_list = []

for i in hap_list:
    if i in prime_list:
        overlap_list.append(i)

print(overlap_list)