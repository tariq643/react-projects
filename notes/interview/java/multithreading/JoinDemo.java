package notes.interview.java.multithreading;

public class JoinDemo{

  public static void main(String[] args) throws InterruptedException{

    Thread t1 = new Thread(new JoinTask());
    t1.setName("First Thread");
    Thread t2 = new Thread(new JoinTask());
    t2.setName("Second Thread");
    Thread t3 = new Thread(new JoinTask());
    t3.setName("Third Thread");

    t1.start();
    System.out.println("Current Thread: "+Thread.currentThread().getName());
    t1.join();

    t3.start();
    System.out.println("Current Thread: "+Thread.currentThread().getName());
    t3.join();

    t2.start();
    System.out.println("Current Thread: "+Thread.currentThread().getName());
    t2.join();


  }
}

class JoinTask implements Runnable {
@Override
  public void run() {
    try {
      System.out.println(Thread.currentThread().getName());
      Thread.sleep(5000);
    }
    catch (InterruptedException interruptedException) {
      interruptedException.printStackTrace();
    }
  }
}
