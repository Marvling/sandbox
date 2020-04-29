import random

target = random.randint(10**9, 10**10)

target = list(str(target))
double_sum = 0
final = []

for i in range(0, len(target), 2):
    print(i)
    double_sum = target[i] + target[i+1]
    final.append(double_sum)

print(target)
print(final)

