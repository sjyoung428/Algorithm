from collections import deque


n, m, k, x = map(int, input().split())

data = [[] for _ in range(n+1)]

for i in range(m):
    head, tail = map(int, input().split())
    data[head].append(tail)

distance = [-1 for _ in range(n+1)]
distance[x] = 0


def bfs():
    queue = deque()
    queue.append(x)

    while queue:
        now_city = queue.popleft()

        for next_city in data[now_city]:
            if distance[next_city] == -1:
                distance[next_city] = distance[now_city] + 1
                queue.append(next_city)


bfs()

check = False

for i in range(n+1):
    if distance[i] == k:
        print(i)
        check = True


if not check:
    print(-1)
