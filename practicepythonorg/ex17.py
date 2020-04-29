import os, json
import requests
from bs4 import BeautifulSoup

#getting headings from the ny times website

abspath = os.path.abspath(__file__)
dname = os.path.dirname(abspath)
os.chdir(dname)
 
base_url = 'http://www.nytimes.com'
r = requests.get(base_url)
soup = BeautifulSoup(r.text, 'html.parser')

headings = soup.findAll("h2", {"class": "css-n2blzn esl82me0"})
headings.extend(soup.findAll("h2", {"class": "css-1qwxefa esl82me0"}))
headings.extend(soup.findAll("h2", {"class": "css-14bttnj esl82me0"}))

if __name__ == "__main__":
    print(os.getcwd())

    with open('ex17_headings.json', 'r') as fp:
        c = 0
        dic = {}
        for h2 in list(set(headings)):
            c += 1
            h2 = h2.text
            dic.setdefault(c,h2)
            json.dump(dic, fp)
        print(fp)
