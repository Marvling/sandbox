# https://projecteuler.net/problem=1

# If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
# Find the sum of all the multiples of 3 or 5 below 1000.


#%%

li1 = list(range(0,1000))
li2 = []

for a in li1:
    if a == 0:
        pass
    elif a % 3 == 0:
        li2.append(a)
    elif a % 5 == 0:
        li2.append(a)

print(li2)
print(sum(li2))
# %%
r = list(range(0,1000))

li3 = [i for i in r if i % 3 == 0]
li5 = [k for k in r if k % 5 == 0]
li6 = li3 + li5

li6 = list(dict.fromkeys(li6))
li6.sort()

print(li6)
print (sum(li6))
# %%
# finds the sum of number that canbe divided by 5 and 3 in given range

def sumfinder (x,y):
    r = list(range(x,y))

    li3 = [i for i in r if i % 3 == 0]
    li5 = [k for k in r if k % 5 == 0]
    li6 = li3 + li5
    li6 = list(dict.fromkeys(li6))

    print (sum(li6))

# %%
sumfinder(0,100)

# %%
