import java.util.Arrays;
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

        throw new RuntimeException("No match found");

    }

    public static void main(String[] args) {
        int[] numbers = new int[] { 2, 7, 5, 15 };

        System.out.println("Test : " + Arrays.toString(twoSum(numbers, 22)));
    }
}