#%%
a = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
a1 = []

for i in a:
    if i % 2 == 0:
        a1.append(i)
print(a1)

# %%
a2 = [i for i in a if i % 2 == 0]
a2

# %%
