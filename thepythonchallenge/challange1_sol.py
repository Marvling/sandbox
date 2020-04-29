# http://wiki.pythonchallenge.com/index.php?title=Level1:Main_Page


#ROT2

#a > c
#b > d
#etc...

user_input = input("Enter a string to un-ROT2.")

i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
e = "CDEFGHIJKLMNOPQRSTUVWXYZABcdefghijklmnopqrstuvwxyzab"

t = str.maketrans(i, e)

print (user_input.translate(t))

input("\n\nPress enter to continue.")

