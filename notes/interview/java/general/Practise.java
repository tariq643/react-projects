package notes.interview.java.general;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.PriorityQueue;

public class Practise {
  

  // dijkstra algorithm
  private int[] dijkstra(int V,
                          ArrayList<ArrayList<ArrayList<Integer>>> adj, int S) {

    PriorityQueue<int[]> pq = new PriorityQueue<>(Comparator.comparingInt(a->a[0]));

    int[] dist = new int[V];
    Arrays.fill(dist, (int)1e9);

    dist[S] = 0;
    pq.add(new int[]{0,S});

    while (!pq.isEmpty()) {
      int node = pq.peek()[0];
      int dis = pq.peek()[1];
      pq.poll();
      // traverse all its neighbours
      for (ArrayList<Integer> it : adj.get(node)) {
        int adjNode = it.get(0);
        int edgeWeight = it.get(1);
        // edge relxation
        if (dis + edgeWeight < dist[adjNode]) {
          dist[adjNode] = dis + edgeWeight;
          pq.add(new int[]{dist[adjNode],adjNode});
        }
      }
    }
              return dist;
  }

}
