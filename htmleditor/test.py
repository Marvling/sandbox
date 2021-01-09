from bs4 import BeautifulSoup
import os

os.chdir(os.path.dirname(os.path.abspath(__file__)))

with open("index.html", "r") as file:
    soup = BeautifulSoup(file, 'html.parser')

    tag_existing = soup.div
    print(tag_existing)

    tag_new = soup.new_tag("a", href="http://www.example.com")
    tag_new.string = "Link text."
    tag_existing.append(tag_new)

    print(tag_existing)

with open("index.html", "w") as file:
    file.write(str(soup))
