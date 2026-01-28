package notes.interview.java.general;


public class Practise {


  public static void main(String[]args) {
    // length of a string in an aray
    
    
    List<String> ans = Arrays.asList("abc","ab");
    Function<String,Integer> lengthExtractor = s->s.length();
     Predicate<Intger> numberEvenOdd = num->num%2==0; 
     List a = new List();
     a.add("str");
     a.add(1);
     for (String obj : a) {
      String str = (String) obj;
      System.out.println(str);
     }
    List<Integer> length = ans.map(lengthExtractor);



    // Find the frequency of elements using stream ? ["chrome","Edge","chrome","Firefox"]
()
     Map<String, Long> freqMap = browsers.stream().collect(Collectors.groupingBy(s->s,Collectors.counting()));

  }
}
