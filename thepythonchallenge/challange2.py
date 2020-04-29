import os
import sys
from pathlib import Path
import re

#http://www.pythonchallenge.com/pc/def/ocr.html

#TODO get path names to work on both os, or move to github

textfile = Path("thepythonchallenge/challange3.txt")


with open (textfile, 'r') as fp:
    complete = fp.read()

complete =list(complete)
print(len(complete))

def finder (char):
    l = [i for i in complete if i == char]
    return len(l)

print (finder('('),finder(')'),finder('['),finder(']'),finder('{'),finder('}'))
print (finder('!'),finder('@'),finder('#'),finder('$'),finder('%'),finder('^'),finder('&'),finder('*'),)
print (finder(' '))
print (finder('-'),finder('_'),finder('='),finder('+'))

reduced = re.sub('[!@#','',complete)
print(reduced)


# complete = re.sub('[{}]','1',complete)
# print(complete)