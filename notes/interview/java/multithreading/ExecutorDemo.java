package notes.interview.java.multithreading;

import java.util.concurrent.Executor;
import java.util.concurrent.Executors;

public class ExecutorDemo {

  public static void main(String[] args) {
    
    Executor singleThreadPool = Executors.newSingleThreadExecutor();
    Executor fixedThreadPool = Executors.newFixedThreadPool(10);
    
  }
}