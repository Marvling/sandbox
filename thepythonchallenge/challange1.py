#%%

alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a','b']
encrytped = list("g fmnc wms bgblr rpylqjyrc gr zw fylb. rfyrq ufyr amknsrcpq ypc dmp. bmgle gr gl zw fylb gq glcddgagclr ylb rfyr'q ufw rfgq rcvr gq qm jmle. sqgle qrpgle.kyicrpylq() gq pcamkkclbcb. lmu ynnjw ml rfc spj.")
# encrytped = list("http://www.pythonchallenge.com/pc/def/map.html")
decrypted = []

def convert2(i):
    if i not in alpha:
        return i
    else:
        finder = alpha.index(i) + 2
        result = alpha[finder]
    return result
decrypted = convert2(encrytped[0])




print (''.join(decrypted))

# %%
convert = lambda x: chr((ord(x) + 2 - 97) % 25 + 97)
result = map(convert2, encrytped)
print("".join(list(result)))

# %%


# %%
