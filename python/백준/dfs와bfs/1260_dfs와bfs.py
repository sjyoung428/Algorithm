from collections import deque
import sys
input = sys.stdin.readline

n, m, v = map(int, input().split())

mapData = [[]for _ in range(n+1)]

for i in range(m):
    head, tail = map(int, input().split())

    mapData[head].append(tail)
    mapData[tail].append(head)

for i in range(n+1):
    mapData[i].sort()

visited = [False]*(n+1)


def dfs(start):
    print(start, end=" ")
    visited[start] = True

    for i in mapData[start]:
        if not visited[i]:
            dfs(i)
            visited[i] = True


dfs(v)
print()

visited = [False]*(n+1)


def bfs(start):
    queue = deque()
    queue.append(start)
    visited[start] = True
    while queue:
        nowCity = queue.popleft()
        print(nowCity, end=" ")
        for i in mapData[nowCity]:
            if not visited[i]:
                visited[i] = True
                queue.append(i)


bfs(v)
