from ex13 import fib_generator

def dup_remover (li):
    li = set(li)
    li = list(li)
    return li

def dup_remover_2 (li):
    li2 = []

    for i in li:
        if i not in li2:
            li2.append(i)
    return li2

liste = [1,2,2,5,5,6]

print(dup_remover(liste))
print(dup_remover_2(liste))
print(dup_remover_2(fib_generator(8)))

