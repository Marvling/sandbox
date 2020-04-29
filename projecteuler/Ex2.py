# By considering the terms in the Fibonacci sequence whose values do not exceed four million, 
# find the sum of the even-valued terms.

def fibgenerator_len (n):
    seq = [1,1,2]
    n = n-3

    while n != 0:
        a = seq[len(seq)-2]
        b = seq[len(seq)-1]
        seq.append(a+b)
        n = n - 1
        
    return seq

def fibgenerator_val (n):
    seq = [1,1,2]
    a = seq[-1]

    while n >= a:
        a = seq[len(seq)-2]
        b = seq[len(seq)-1]
        seq.append(a+b)
        a = seq[-1]
    seq.pop()
    return seq

def adder_even (l):
    l2 = [i for i in l if i % 2 == 0]
    return sum(l2)

if __name__ == "__main__":
    a = fibgenerator_val(4000000)
    print(a)
    print(adder_even(a))