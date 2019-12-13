
def replace_acurences_later_acurences(string):
    string_list = []
    alt_word = ''
    for letter in string:
        string_list.append(letter)
    first_letter = string_list[0]
    for letter in string_list:
        if letter == first_letter:
            letter = '$'
        alt_word += letter
    return f"{first_letter}{alt_word[1:]}"

# print(replace_acurences_later_acurences('abcabcabcabcabc'))

def longest_term_in_list(length_list):
    current_champ = ['']
    for string in length_list:
        if len(string) > len(current_champ[0]):
            current_champ[0] = string
    return current_champ[0]

# print(longest_term_in_list(['123', '12345','123', '1234', '456']))

def swap_first_and_last_char(string):
    f, *center, e = string
    new_word = e[0]
    for letter in center:
        new_word += letter
    new_word += f[0]
    return new_word

# print(swap_first_and_last_char('helloworld'))


def sum_any_and_all(list_to_sum):
    base = 0
    for item in list_to_sum:
        base += item
    return base

print(sum_any_and_all([1,2,3,4,5,6]))