import random

number = random.randint(1,9)
guess = 0
count = 0

print('a is number between 1 and 9 guess what it is\ntype exit to quit')

while guess != number and guess != "exit":
    guess = input("What's your guess?")
    
    if guess == "exit":
        break
    
    guess = int(guess)
    count += 1
    
    if guess < number:
        print("Too low!")
    elif guess > number:
        print("Too high!")
    else:
        print("You got it!")
        print(f"And it only took you, {count}, tries!")