package notes.interview.java.multithreading;

public class CreatingThreadExtendsThread {

  public static void main(String[] args) {
    for (int i = 1; i <= 5; i++) {
    ThreadTask task = new ThreadTask();
      task.setName("Thread " + i);
      task.start();
    }
  }
  
}

class ThreadTask extends Thread {

  @Override
  public void run() {
    System.out.println(Thread.currentThread().getName() + " is running");
  }
}