import os
import io
os.chdir('/Users/sinanozer/Dropbox/Sides/python_sandbox/practicepythonorg')

counter_dict = {}
with open('ex22-1.txt') as fp:
	line = fp.readline()
	while line:
		line = line[3:-26]
		if line in counter_dict:
			counter_dict[line] += 1
		else:
			counter_dict[line] = 1
		line = f.readline()

print(counter_dict)
