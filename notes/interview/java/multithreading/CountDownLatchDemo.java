package notes.interview.java.multithreading;

import java.util.concurrent.CountDownLatch;

public class CountDownLatchDemo {
  
  public static void main(String[] args) {
    CountDownLatch countDownLatch = new CountDownLatch(3);
    Thread t1 = new Thread(new Task("service 1", countDownLatch));
    Thread t2 = new Thread(new Task("service 2", countDownLatch));
    Thread t3 = new Thread(new Task("service 3", countDownLatch));

    t1.start();
    t2.start();
    t3.start();

    try{
      countDownLatch.await();
      System.out.println("All services are up");
    }
    catch(InterruptedException e) {
      e.printStackTrace();
    }

  }

}


class Task implements Runnable {

  private String service;
  private CountDownLatch countDownLatch;

  public Task (String service, CountDownLatch countDownLatch) {
    this.service = service;
    this.countDownLatch = countDownLatch;
  }

  @Override
  public void run() {
    try {
      Thread.sleep(1000);
    } catch (InterruptedException e) {
      e.printStackTrace();
    }
    System.out.println("Service is Up");
    countDownLatch.countDown();
  }
}