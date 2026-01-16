package notes.interview.java.general;


public class RearrangeElementBySign {
  
  public int[] rearrangeArray(int[] nums) {

    int left = 0;
    for (int right = 0; right < nums.length; right++) {
      if (nums[right] < 0) {
        int temp = nums[left];
        nums[left++] = nums[right];
        nums[right] = temp;
      }
    }
    return nums;
  }

  public static void main(String[] args) {
    
    int[] nums = {2, 4, 5, -1, -3, -4};
    RearrangeElementBySign obj = new RearrangeElementBySign();
  }
}
