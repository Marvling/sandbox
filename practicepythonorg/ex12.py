#%%
def list_cerator (end_words = ['q', 'finish', 'done', 'exit']):
 
    input_str = None
    input_list = []

    while input_str not in end_words:
        input_str = input('type things you in your new list and press enter, when done, type "done" and press enter')
        if input_str not in end_words:
            input_list.append(input_str)
    
    return input_list

def list_trimmer (li):
    li_trimmed = [li[0],li[-1]]
    return li_trimmed


if __name__ == '__main__':
    a = list_cerator()
    print(f'your list is:\n{a}')

    b = list_trimmer(a)
    print(b)


# %%
