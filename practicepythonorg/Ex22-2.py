import os
import io
os.chdir('/Users/sinanozer/Dropbox/Sides/python_sandbox/practicepythonorg')

with open('ex22-2.txt', 'r') as names:
    all_file = names.read()
    list_names = all_file.split()
    list_names.sort()

c_darth = 0
c_leia = 0
c_luke = 0

for Darth in list_names:
    c_darth += 1

for Leia in list_names:
    c_leia += 1

for Luke in list_names:
    c_luke += 1

print(c_luke, c_leia, c_darth)
