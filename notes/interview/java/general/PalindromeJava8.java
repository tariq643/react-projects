import java.util.*;
import java.util.stream.*;

public class PalindromeJava8 {

  public static void main(String[]args) {

    List<String> list = Arrays.asList("CFmH0J","megprF","6zC4cq","gvwbqz","eNZSVx","pkEAkz","madam","mam");
    List<String> palindrome = list.stream().filter(s->{
      String sb = new StringBuffer(s).reverse().toString();
      return sb.equals(s);
    }).collect(Collectors.toList());
    System.out.println(palindrome);
  }


  private void method(int[]nums) {

    int result = Integer.MIN_VALUE;
    int prefix = 1, suffix = 1;

    for (int i = 0; i < nums.length; i++) {
      
      prefix = prefix == 0 ? 1 : prefix;
      suffix = suffix == 0 ? 1 : suffix;
      prefix = prefix * nums[i];
      suffix = suffix * nums[nums.length - i - 1];
      ans = Math.max(ans, Math.max(prefix, suffix));
    }
    return ans;
  }
}