#What is the 10 001st prime number?

def primelister (n):

    l1 = [2,3,5]

    a = l1[-1] + 1

    b = 0
    k = l1[b]

    while len(l1) != n:
        while k != l1[-1]:
            if a % k == 0:
                a += 1
            else:
                b += 1
                k = l1[b]
        l1.append(a)
        a += 1
        b = 0
        k = l1[0]

    return l1
            
if __name__ == "__main__":
    c = primelister(19)
    print(c)