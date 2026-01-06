package notes.interview.java.general;

public class SingletonPattern {
  
  // empty constructor
  private SingletonPattern () {

  }

  // field of SingletonPattern
  private static SingletonPattern instance;

  public static SingletonPattern getInstance() {
    if (instance == null) {
      return new SingletonPattern();
    }
    return instance;
  }
}


// break from the singleton pattern -> reflection,  cloning and serilzation and deserialization