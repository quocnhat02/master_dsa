# Maximum Sum Subarray of Size K (easy)

def find_max_sub_array(numbers, k):
    sum = 0
    start = 0
    valMax = numbers[0]

    for idx,num in enumerate(numbers):
        sum += num
        if idx >= k - 1:
            valMax = max(valMax, sum)
            sum -= numbers[start]
            start += 1
    return valMax


arr = [2, 1, 5, 1, 3, 2]
k = 3

print(find_max_sub_array(arr, k))