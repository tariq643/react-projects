package notes.interview.java.general;

public class GCDNumbers {

  private long gcdNumber (long a, long b) {

    return b == 0 ? a : gcdNumber(b , a % b);
  }

  public int LCM(int n1, int n2) {

    return (n1 * n2) / gcdNumber(n1, n2);
  }

  public static void main(String[] args) {
    
  }
}