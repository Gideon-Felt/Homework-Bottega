import random

def random_hexadecimal_color_generator():
    random_number = random.randint(0,16777215)
    hexidecimal = str(hex(random_number))
    color = f'#{hexidecimal[2:]}'
    return color

# print(random_hexadecimal_color_generator())

def hyphenated_string_organizer(string):
    new_string = ''
    for string in sorted(string.lower().split('-')):
        new_string += f"{string}-"
    return new_string[:-1]

# print(hyphenated_string_organizer('hello-I-am-gideon-felt-I-write-python'))

def return_my_dict_values(dict):
    all_dict_values = []
    for key, value in dict.items():
        all_dict_values.append(value)
    return all_dict_values

my_dict = {
    'name': 'Gideon',
    'age': '21',
    'height': "5'11",
    'weight': '152lb'
}

# print(return_my_dict_values(my_dict))
