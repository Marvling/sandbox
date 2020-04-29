# a < b < c
# a**2 + b**2 = c**2
# a + b + c = 1000.
# a*b*c = ?
import traceback


for a in range(3,1000):
    for b in range(a+1, 999-a):
        c = 1000 - a - b
        traceback.print_exc()
        if c**2 == a**2 + b**2:
            print(a,b,c)
            print(a*b*c)