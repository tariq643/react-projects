package notes.interview.java.multithreading;

public class CreatingThreadImplementsRunnable {

  public static void main(String[] args) {

    for (int i = 1; i <= 5; i++) {
    Thread task = new Thread(new ThreadTask());
      task.setName("Thread " + i);
      task.start();
    }
  }
  
}

class ThreadTask implements Runnable {

  @Override
  public void run() {
    System.out.println(Thread.currentThread().getName() + " is running");
  }
}