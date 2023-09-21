import java.util.BitSet;
import java.util.HashMap;
import java.util.Map;

/**
 * c1
 */
public class c1 {

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

    public static void main(String[] args) {
        int[] numbers = new int[] { 2, 7, 2, 5, 7, 15 };

        // System.out.println("Test 1 : " + Arrays.toString(twoSum(numbers, 22)));
        System.out.println("Test 2 : " + findDuplicate(numbers, 32000));

    }
}