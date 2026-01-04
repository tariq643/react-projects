package notes.interview.java.multithreading;

import java.security.InvalidParameterException;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

public class CallableDemo{

  public static void main(String[] args) {
    
    Task task = new Task(5);
    ExecutorService executorService = Executors.newFixedThreadPool(2);
    Future<Integer> future = executorService.submit(task);    
  }

}

class Task implements Callable<Integer>{

  private int number;

  public Task(int number) {
    this.number = number;
  }

  @Override
  public Integer call() throws Exception {
    // TODO Auto-generated method stub
    if (number < 0) {
      throw new InvalidParameterException("Invalid Parameter");
    }
    return number * number;
  }


}