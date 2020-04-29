def fonk (l):
    a = [i ** 2 for i in l]
    a = sum(a)
    b = sum(l)**2

    return b - a

if __name__ == "__main__":
    l = list(range(1,101))
    print(fonk(l))