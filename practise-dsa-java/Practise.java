import java.util.Stack;

public class Practise {

    public static void main(String[] args) {
        
        System.out.println("Hello, World!");

    }

    public int[] asteroidCollision(int[] asteroids) {
      
      Stack<Integer> stack = new Stack<>();
      
      for (int asteroid : asteroids) {
        if (asteroid > 0) {
          stack.push(asteroid);
        }
        else {

        }
      }
    }
      
}