ilk = list(range(1, 8))
isaretliler = []

for nerde, eleman in enumerate(ilk):
    onceleri = ilk[:nerde]
    for oncebiri in onceleri:
        bolunmuyomu = eleman % oncebiri
        if not bolunmuyomu:
            isaretliler.append(oncebiri)

print(ilk, isaretliler)

evet = list(set(ilk) - set(isaretliler))
print(evet)

sonuc = 1       
for eleman in list(set(ilk) - set(isaretliler)):
    sonuc *= eleman

print(sonuc)
