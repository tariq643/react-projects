import java.util.*;

public class Practise {

          private boolean bfsOfGraph (int node, List<List<Integer>> adj, int[] colors) {

            Queue<Integer> q = new LinkedList<>();
            q.add(node);

            while (!q.isEmpty()) {
                int currentNode = q.poll();
                for (int neighbour : adj.get(currentNode)) {
                    if (colors[neighbour] != -1) {
                        colors[currentNode] = 1 - colors[node];
                        q.add(neighbour);
                    }
                    else if (colors[neighbour] == colors[currentNode]){
                        return false;
                    }
                }
            }
            return true;
          }

          public boolean isBipartite(int V, List<List<Integer>> adj) {

            int colors[] = new int[V];
            Arrays.fill(colors, -1);
            for (int i = 0; i < V; i++) {
                if (colors[i] == -1) {
                    if (!bfsOfGraph(i, adj, colors)) {
                        return false;
                    }
                }
            }
            return true;
          }
            
}


class DisjointSet {

    int[] rank,parent,size;

    // constructor
    public DisjointSet(int n) {
        rank = new int[n + 1];
        parent = new int[n + 1];
        size = new int[n + 1];
        for (int i = 0; i <= n; i++) {
            parent[i] = i;
            size[i] = 1;
        }
    }

    int findUParent (int node) {
        if (node == parent[node]) {
            return node;
        }
        return parent[node] = findUParent(parent[node]);
    }

    void unionByRank (int u, int v) {
        int ulp_u = findUParent(u);
        int ulp_v = findUParent(v);
        if (rank[ulp_u] < rank[ulp_v]) {
            parent[ulp_u] = ulp_v;
        }
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
