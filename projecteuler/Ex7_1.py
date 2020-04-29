def nthprime (n):
    prime_numbers = [2,3]
    i=3

    if 0 < n < 3 :
        return print(n,'th Prime Number is :',prime_numbers[n-1])
    
    elif n > 2:

        while True:
            i += 1
            status = True

            for j in range(2, int(i/2)+1):
                if i % j == 0:
                    status = False
                    break
            if status == True :
                prime_numbers.append(i)

            if len(prime_numbers) == n:
                break

        return prime_numbers
    
    else:
        print('Please Enter A Valid Number')

if __name__ == "__main__":
    a = nthprime(9)
    print(a)
