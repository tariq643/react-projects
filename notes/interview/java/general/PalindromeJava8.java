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
}