package notes.interview.java;

import java.util.Arrays;

public class ShiftNegativeAndPositiveOnOneSide {

  public static void main(String[] args) {

    int arr[] = {2,4,5,-1,-2,-3,9};
    int j = 0;
    for (int i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
        int temp = arr[j];
        arr[j++] = arr[i];
        arr[i] = temp;
      }
    }
    
    Arrays.stream(arr).forEach(System.out::println);

  }
}