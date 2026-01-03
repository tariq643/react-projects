package notes.interview.java;

public class EvenOddTwoThreads {

  private int number = 1;
  private final int limit = 10;
  private final Object lock = new Object();

  private void printOdd() {

    synchronized(lock) {
      while (number <= limit) {
        while (number % 2 == 0) { // wait if the number is even
          try {
            lock.wait();
          }
          catch(InterruptedException interruptedException) {
            interruptedException.printStackTrace();
          }
        }
        if (number <= limit) {
          System.out.println("odd thread: " + number);
          number = number + 1;
          lock.notify(); // Notify the other thread
        }
      }
    }
  }

  private void printEven() {

    synchronized(lock) {
      while (number <= limit) {
        while (number % 2 != 0) { // wait if the number is odd
          try {
            lock.wait();
          }
          catch(InterruptedException interruptedException) {
            interruptedException.printStackTrace();
          }
        }
        if (number <= limit) {
          System.out.println("even thread: " + number);
          number = number + 1;
          lock.notify(); // Notify the other thread
        }
      }
    }
  }

  public static void main(String[] args) {
    EvenOddTwoThreads evenOddTwoThreads = new EvenOddTwoThreads();
    Thread thread1 = new Thread(evenOddTwoThreads::printEven, "even-thread");
    Thread thread2 = new Thread(evenOddTwoThreads::printOdd, "odd-thread");

    thread1.start();
    thread2.start();

    try {
      thread1.join();
      thread2.join();
    }
    catch(InterruptedException e) {
      e.printStackTrace();
    }

  }
  
}
