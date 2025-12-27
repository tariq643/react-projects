package notes.interview.java;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class ComparatorvsComparable {

  // Comparator and Comparable are used to sort objects based on some property in them
  public static void main(String[] args) {
    List<Employee> employeeList = new ArrayList<>();
    employeeList.add(new Employee("Durgesh","321456",12));
    employeeList.add(new Employee("Ankit","1234",11));
    employeeList.add(new Employee("Bhavesh","977",45));
    employeeList.stream().forEach(System.out::println);

    // sorting on comparator vs comparable
    // for comparable implement the comparable interface
    Collections.sort(employeeList);
    employeeList.stream().forEach(System.out::println);


  }
  
}

class Employee implements Comparable<Employee>{
  
  private String name;
  private String phoneNumber;
  private Integer employeeId;
  
  public String getName() {
    return name;
  }
  public void setName(String name) {
    this.name = name;
  }
  public String getPhoneNumber() {
    return phoneNumber;
  }
  public void setPhoneNumber(String phoneNumber) {
    this.phoneNumber = phoneNumber;
  }
  public Integer getEmployeeId() {
    return employeeId;
  }
  public void setEmployeeId(Integer employeeId) {
    this.employeeId = employeeId;
  }
  public Employee(String name, String phoneNumber, Integer employeeId) {
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.employeeId = employeeId;
  }
  public Employee() {
  }
  @Override
  public String toString() {
    return "Employee [name=" + name + ", phoneNumber=" + phoneNumber + ", employeeId=" + employeeId + "]";
  }
  @Override
  public int compareTo(Employee arg0) {
    // TODO Auto-generated method stub
    return this.employeeId - arg0.employeeId;
  }
  
}

// class EmployeeComparator extends Comaparator {

// }