# Smallest Subarray with a given sum (easy)

def find_smallest_subarray(numbers, s):
    sum = 0
    start = 0
    smallest = len(numbers)

    for idx, num in enumerate(numbers):
        sum += num
        while (sum >= s and idx >= start):
            smallest = min(smallest, idx - start + 1)
            sum -= numbers[start]
            start += 1
        
    return smallest


arr = [2, 1, 5, 2, 3, 2]
arr2 = [2, 1, 5, 2, 8]
arr3 = [3, 4, 1, 1, 6]
s = 7

print(find_smallest_subarray(arr, s))
print(find_smallest_subarray(arr2, s))
print(find_smallest_subarray(arr3, 8))