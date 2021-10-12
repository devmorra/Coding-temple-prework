def hello_name(user_name):
    print(f"hello_{user_name}")

def print_odd_numbers():
    for i in range(1,101,2):
        print(i, end=" ")
    print("")

def max_num_in_list(a_list):
    if not isinstance(a_list, list):
        raise TypeError("max_num_in_list was passed a non-list as input")
    return max(a_list)

def is_leap_year(a_year):
    if not isinstance(a_year, int):
        raise TypeError("is_leap_year was passed a non-int as input")
    if a_year % 4 == 0:
        if a_year % 400 == 0:
            return True
        elif a_year % 100 == 0:
            return False
        else: 
            return True
    else:
        return False

def is_consecutive(a_list):
    if not isinstance(a_list, list):
        raise TypeError("is_consecutive was passed a non-list as input")
    if len(a_list) == 0 or len(a_list) == 1:
        return True
    for i in range(1, len(a_list)):
        prev = a_list[i-1]
        cur = a_list[i]
        if cur != prev + 1:
            return False
    return True


numlist = [0, 1, 5, 10, 27, 3, 26]

hello_name("name")
print_odd_numbers()
print(max_num_in_list(numlist))
years = [2004, 2100, 2400, 1999]
for year in years:
    print(year, is_leap_year(year))

consecList = [0, 1, 2, 3, 4, 5]
print(is_consecutive(consecList))
consecList.pop(3)
print(is_consecutive(consecList))

s = 'John\'s '

