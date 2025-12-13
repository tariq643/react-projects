import java.util.*;

public class Practise {

          // find the first occurence of t in boolean array f f f f t t t ..... t
          
          private int firstOccurenceOfTrue (boolean[] arr) {
          
               int length = arr.length;
               int low = 0, high = length - 1, firstOccurence = -1; // -1 indicates true does not exist
               while (low <= high) {
               

                    int mid = low + (high - low) / 2;
                    if (arr[mid]) {
                    
                         firstOccurence = mid;
                         high = mid - 1;
                    }
                    else {
                         low = mid + 1;    
                    }
               }
               return firstOccurence;
          }         

          public static void main(String[] args) {
            Practise p = new Practise();
            boolean[] arr = {false, false, false, false, false, true};
            int index = p.firstOccurenceOfTrue(arr);
            System.out.println("First occurrence of true is at index: " + index);
          }
}

class ListNode {
    int val;
    ListNode next;

    ListNode() {
        val = 0;
        next = null;
    }

    ListNode(int data1) {
        val = data1;
        next = null;
    }

    ListNode(int data1, ListNode next1) {
        val = data1;
        next = next1;
    }
}
