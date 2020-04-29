#%%
import sys
sys.path.insert(1,'/Users/sinanozer/Dropbox/Sides/python_sandbox/projecteuler')

from Ex2 import fibgenerator_len

def adam_gibi_search (a,l):
    if a in l:
        return True
    else:
        return False

def binary_search (a,l):
    l = list(set(l))
    l.sort()

    while len(l) != 1:
        k = int(len(l)/2)
        if a == l[k]:
            return True
            break
        elif a < l[k]:
            l = l[:k]
        elif a > l[k]:
            l = l[k:]
    return False

if __name__ == "__main__":
    print(binary_search(5,fibgenerator_len(12)))

# %%
