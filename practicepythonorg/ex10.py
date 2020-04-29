#%%
import random

a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

c = [i for i in a if i in b]
c = list(dict.fromkeys(c))

print(c)
#%%
import random

a = [random.choice(range(10)) for i in range(random.randint(1,10))]
print(a)
b = [random.choice(range(10)) for i in range(random.randint(1,10))]
print(b)

c = [i for i in a if i in b]
c = list(dict.fromkeys(c))
c.sort()

print(c)

# %%
import random

m = random.sample(range(1,13), 12)
n = random.sample(range(1,17), 16)

k = [i for i in m if i in n]
k = list(dict.fromkeys(k))
k.sort()

print(m)
print(n)
print(k)

# %%
