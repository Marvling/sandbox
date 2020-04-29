#Find the largest palindrome made from the product of two 3-digit numbers.

def palindrome_checker (a,b):
    li = list(str(a*b))

    if li == li[::-1]:
        return True
    else:
        return False

def multiplyer (l):
    c = len(l) - 1
    l_out =[]
    
    while c + 1 != 0:
        a = 0
        while a - 1 != c:
            if l[c]*l[a] not in l_out:
                l_out.append(l[c]*l[a])
        a += 1
        c -= 1

    l_out.sort()
    return l_out

def all_in_one (l):
    c = len(l) - 1
    l_out =[]
    
    while c + 1 != 0:
        a = 0
        while a - 1 != c:
            if palindrome_checker(l[c],l[a]) == True:
                if l[c]*l[a] not in l_out:
                    l_out.append(l[c]*l[a])
            a = a + 1  
        c = c - 1

    l_out.sort()
    return l_out

if __name__ == "__main__":

    a = list(range(1,1000))
    print(all_in_one(a)[-1])
    
    # c = [i*k for i in range(100,1000) for k in range(100,1000) if palindrome_checker(i,k) == True]
    # c = list(dict.fromkeys(c))
    # c.sort()
    # print(c)
