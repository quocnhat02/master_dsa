package com.dsa;

import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;

class SinhVien {
    String ten;
    int diem;

    public SinhVien(String ten, int diem) {
        this.ten = ten;
        this.diem = diem;
    }

    public String toString() {
        return ten + ": " + diem;
    }
}
//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {

    public static void main(String[] args) {
        SinhVien[] ds = {
                new SinhVien("An", 8),
                new SinhVien("Bình", 9),
                new SinhVien("Lan", 7)
        };

        Arrays.sort(ds, Comparator.comparingInt(sv -> sv.diem));
        System.out.println(Arrays.toString(ds));
    }

}