# Dutch National Flag Problem (medium)

def dutch_flag_sort(arr):
    length = len(arr)
    start = 0
    end = length - 1
    i = 0

    while (i <= end):
        if arr[i] == 0:
            arr[i], arr[start] = arr[start], arr[i]
            i += 1
            start += 1
        elif arr[i] == 1:
            i += 1
        else:
            arr[i], arr[end] = arr[end], arr[i]
            end -= 1

    return arr


print(dutch_flag_sort([1, 0, 2, 1, 0]))
print(dutch_flag_sort([2, 0, 0, 1, 2, 2]))
