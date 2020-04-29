import random
import string

def pass_generator (n):
    pswrd = ''.join([random.choice(string.ascii_letters + string.digits + string.punctuation) for n in range(n)])
    return pswrd

if __name__ == "__main__":
    print(pass_generator(12))