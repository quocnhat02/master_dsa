# Triplets with Smaller Sum (medium)

def find_count_triple_less(nums, target):
    length = len(nums)
    if length < 3:
        return -1

    start = 0
    end = length - 1
    count = 0

    while (start + 1 < end):
        sum = nums[start] + nums[start + 1]+nums[end]
        if sum < target:
            print(f"{nums[start]} + {nums[start + 1]}+{nums[end]}")
            count += 1
        end -= 1

    return count


# print(find_count_triple_less([-1, 0, 2, 3], 3))
print(find_count_triple_less([-1, 1, 2, 3, 4], 5))
