#For every digit that the user guessed correctly in the correct place, they have a “cow”. 
#For every digit the user guessed correctly in the wrong place is a “bull.”

import random

def fourdigit_generator ():

	t1 = random.sample(range(0,9), 3)
	t2 = [x for x in range(1,9) if x not in t1]
	a = random.sample(t2,1)
	t1.insert(0, a[0])
	return t1


def animalcounter (target, l_input):  
	
	cows = 0
	bulls = 0

	for i in range(4):
		if l_input[i] == target[i]:
			cows +=1

		elif l_input[i] in target and l_input[i] != target[i]: 
			bulls +=1

	return cows, bulls


def cows_n_bulls ():
	
	while True:
		
		target = fourdigit_generator()
		inp = [int(i) for i in input('enter a 4 digit number')]
		#print (target, inp)

		cows = 0
		tries =0

		while cows != 4:
			tries += 1 

			cows, bulls = animalcounter(target, inp)
			

			print(f'you have {cows} cows\nyou have {bulls} bulls')
			print(f'you guessed {tries} times')

			if cows != 4:
				inp = [int(i) for i in input('guess again')]
		
		print(f'Congrats! You won\nIt took you {tries} guesses')

		if input('if you want to play again type "yes"') == 'yes':
			pass
		else:
			break

	return tries
	
if __name__ == "__main__":
	cows_n_bulls()