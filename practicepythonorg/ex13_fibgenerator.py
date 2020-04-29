#%%

def fib_generator (n):
    seq = [1,1,2]
    n = n-3

    while n != 0:
        a = seq[len(seq)-2]
        b = seq[len(seq)-1]
        seq.append(a+b)
        n = n - 1
        
    return seq
if __name__ == "__main__":
    print(fib_generator(5))

# %%
def fibo(num):
    a = 1
    b = 1
    l = []
    for i in range(1,num+1):
        sua = a + b
        l.append(a)
        a = b
        b = sua
    return l


# %%
