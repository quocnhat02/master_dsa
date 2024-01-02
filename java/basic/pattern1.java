package java.basic;

/**
 * pattern1
 */
public class pattern1 {

    public static void main(String[] args) {
        int n = 4;

        for (int i = 0; i < n; i++) {
            String repeatedString = "s".repeat(n - i);
            System.out.println(repeatedString);
        }
    }
}