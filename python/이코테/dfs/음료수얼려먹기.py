n, m = map(int, input().split())

graph = []

for i in range(n):
    graph.append(list(map(int, input())))


def dfs(x, y):
    if not((0 <= x < n) and (0 <= y < m)):
        return False
    if graph[x][y] == 1:
        return False

    if graph[x][y] == 0:
        graph[x][y] = 1
        dfs(x-1, y)
        dfs(x, y-1)
        dfs(x+1, y)
        dfs(x, y+1)
        return True
    return False


result = 0
for i in range(n):
    for j in range(m):
        if dfs(i, j):
            result += 1

print(result)
