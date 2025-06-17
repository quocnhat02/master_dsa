package com.dsa;

import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;


//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {

    public static int[] sortColors(int[] colors) {

        int red = 0;
        int white = 0;
        int blue = colors.length - 1;

        while (white <= blue) {

            if (colors[white] == 0) {

                if (colors[red] != 0) {
                    int temp = colors[red];
                    colors[red] = colors[white];
                    colors[white] = temp;
                }

                white++;
                red++;
            }

            else if (colors[white] == 1) {
                white++;
            }

            else {
                if (colors[blue] != 2) {
                    int temp = colors[white];
                    colors[white] = colors[blue];
                    colors[blue] = temp;
                }

                blue--;
            }
        }

        return colors;
    }



    public static void main(String[] args) {
        int[][] inputs = {
                {0, 1, 0},
                {1, 1, 0, 2},
                {2, 1, 1, 0, 0},
                {2, 2, 2, 0, 1, 0},
                {2, 1, 1, 0, 1, 0, 2}
        };

        for (int i = 0; i < inputs.length; i++) {
            System.out.println((i + 1) + ".\tcolors: " + Print.arrayToString(inputs[i]));

            int[] sortedColors = sortColors(inputs[i].clone());
            System.out.println("\n\tThe sorted array is: " + Print.arrayToString(sortedColors));

            System.out.println(Print.repeat("-", 100));
        }
    }
}
class Print{
    public static String repeat(String str, int pValue) {
        String out = "";
        for (int i = 0; i < pValue; i++) {
            out += str;
        }
        return out;
    }

    public static String arrayToString(int[] array) {
        StringBuilder sb = new StringBuilder();
        sb.append("[");
        for (int i = 0; i < array.length; i++) {
            sb.append(array[i]);
            if (i < array.length - 1) {
                sb.append(", ");
            }
        }
        sb.append("]");
        return sb.toString();
    }
}