# Triplet Sum Close to Target (medium)

from asyncio.windows_events import NULL
from json.encoder import INFINITY


def find_trip_sum_close_target(nums, target):
    length = len(nums)
    if length < 3:
        return NULL

    start = 0
    end = length - 1
    closest = INFINITY

    while (start < end - 1):
        sum = nums[start] + nums[end - 1] + nums[end]
        if abs(target - sum) < closest:
            closest = sum
        if sum > target:
            end -= 1
        elif sum < target:
            start += 1
        else:
            return sum

    return closest

# T: O(N)
# S: O(1)


print(find_trip_sum_close_target([-2, 0, 1, 2], 2))
print(find_trip_sum_close_target([-3, -1, 1, 2], 1))
print(find_trip_sum_close_target([1, 0, 1, 1], 100))
