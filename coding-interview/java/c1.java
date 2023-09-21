import java.util.ArrayList;
import java.util.BitSet;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

/**
 * c1
 */
public class c1 {

    // c1
    public static int[] twoSum(int[] numbers, int target) {
        Map<Integer, Integer> map = new HashMap<>();

        for (int i = 0; i < numbers.length; i++) {
            int diff = target - numbers[i];
            if (map.containsKey(diff)) {
                return new int[] { map.get(diff), i };
            } else {
                map.put(numbers[i], i);
            }
        }

        return null;
    }

    // c2
    public static int findDuplicate(int[] numbers, int n) {
        BitSet bitSet = new BitSet(n);

        for (int i = 0; i < numbers.length; i++) {
            if (bitSet.get(numbers[i])) {
                return numbers[i];
            } else {
                bitSet.set(numbers[i], true);
            }
        }

        return -1;
    }

    // c3
    public static List<List<Integer>> findAllPairs(int[] numbers, int sum) {
        List<List<Integer>> result = new ArrayList<>();
        Set<Integer> set = new HashSet<>();

        for (int i = 0; i < numbers.length; i++) {
            int found = sum - numbers[i];

            if (set.contains(found)) {
                List<Integer> pair = new ArrayList<>();
                pair.add(found);
                pair.add(numbers[i]);
                result.add(pair);
            } else {
                set.add(numbers[i]);
            }
        }

        return result;
    }

    public static void main(String[] args) {
        int[] numbers = new int[] { 2, 5, 7, 15, 13, 8 };

        // System.out.println("Test 1 : " + Arrays.toString(twoSum(numbers, 22)));
        // System.out.println("Test 2 : " + findDuplicate(numbers, 32000));
        System.out.println("Test 3 : " + findAllPairs(numbers, 20));
    }
}