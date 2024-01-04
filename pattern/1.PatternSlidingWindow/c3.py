# Longest Substring with K Distinct Characters (medium)

def find_longest_substring(s, k):
    longest = 0
    start = 0
    chars = {}

    for idx, char in enumerate(s):
        if not chars.get(char):
            chars[char] = 0
        chars[char] = chars.get(char) + 1
        while len(chars) > k and idx >= start:
            chars[s[start]] -= 1
            if chars[s[start]] == 0:
                del chars[s[start]]
            start += 1
        longest = max(longest, idx - start + 1)
    
    return longest

print(find_longest_substring("araaci",2))
print(find_longest_substring("araaci",1))
print(find_longest_substring("cbbebi",3))
