def string_reverser (a):
    a = a.split(" ")
    a = a[::-1]
    a = ' '.join(a)
    return a

def string_reverser2 (a):
    return ' '.join(a.split()[::-1])

if __name__ == "__main__":
    a = input()
    print(string_reverser2(a))