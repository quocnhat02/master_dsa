x = int(input("Enter x: "))
y = int(input("Enter y: "))

choose = int(input("Press '1' to compute x^y or '2' to compute x/4:"))

result = 1

# if choose == 1:
#     for num in range(0, y):
#         result *= x
# elif choose == 2:
#     result = x / y
# else:
#     result = 'Invalid selection!'

def case_1(x,y):
    result = 1
    for num in range(0, y):
        result *= x
    return result

def case_2(x,y):
    return x/y

def case_3(x,y):
    return "default"

def switch_case(value, x,y):
    case_of_choose = {
        1: case_1,
        2: case_2,
        3: case_3,
    }
    result = case_of_choose.get(value)
    return  result(x,y)


print(switch_case(choose, x,y))