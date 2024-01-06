def find_sum(numbers, target):
    start = 0
    end = len(numbers) - 1

    while (start <= end):
        sum = numbers[start] + numbers[end]
        if sum == target:
            return [start, end]
        elif sum > target:
            end -= 1
        else:
            start += 1

    return [-1, -1]


numbers = [1, 2, 3, 4, 6]
target = 6

numbers2 = [2, 5, 9, 11]
target2 = 11

print(find_sum(numbers, target))
print(find_sum(numbers2, target2))
