import java.util.*;

public class Practise {


    private void bfs(int node, List<List<Integer>> adj, boolean[] visited, List<Integer> output) {
    
          
          Queue<Integer> q = new LinkedList<>();
          q.add(node);
          
          while (!q.isEmpty()) {
          
            int current = q.poll();
            output.add(current);
            
            
            for (int neighbour : adj.get(current)) {
            if (!visited[neighbour]) {
                visited[neighbour] = true;
                q.add(neighbour);
                }
            }   
          }
    }
    
    public List<Integer> bfsOfGraph(int V, List<List<Integer>> adj) {
    
          boolean[] visited = new boolean[V];
          List<Integer> output = new ArrayList<>();
          
          for (int i = 0; i < V; i++) {
          
            if (!visited[i]) {
                bfs (i, adj, visited, output);
            }
          }
          return output;
    }

   
}

class ListNode {
    int val;
    ListNode next;

    ListNode() {
        val = 0;
        next = null;
    }

    ListNode(int data1) {
        val = data1;
        next = null;
    }

    ListNode(int data1, ListNode next1) {
        val = data1;
        next = next1;
    }
}
