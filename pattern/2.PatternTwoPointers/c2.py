# Remove Duplicates (easy)

# def rm_duplicates(numbers):
#     length = len(numbers)
#     if not length:
#         return -1

#     result = []
#     result.append(numbers[0])
#     idx = 1

#     while (idx < length):
#         element = numbers[idx]
#         if element != result[len(result) - 1]:
#             result.append(element)
#         idx += 1

#     return len(result)

def rm_duplicates(numbers):
    length = len(numbers)
    if not length:
        return -1

    result = 1
    idx = 1

    while (idx < length):
        element = numbers[idx]
        if element != numbers[idx - 1]:
            result += 1
        idx += 1

    return result


numbers = [2, 3, 3, 3, 6, 9, 9]

print(rm_duplicates(numbers))
print(rm_duplicates([2, 2, 2, 11]))
