# a < b < c
# a**2 + b**2 = c**2
# a + b + c = 1000.
# a*b*c = ?


for c in range(1,998):
    for b in range(1,997):
        for a in range(1,996):
            if c > b > a :    
                if c + b + a == 1000:
                    if c**2 == b**2 + a**2:
                        print(c*b*a)
                
