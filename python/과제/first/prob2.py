import sys
input = sys.stdin.readline
n = int(input())
maze = [list(map(int, input().split())) for _ in range(n)]
k = int(input())
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]


def solv(x, y, k):
    if x < 0 or y < 0 or x >= n or y >= n or maze[x][y] == 1 or maze[x][y] == 3 or maze[x][y] == 4 or k < 0:
        return False
    elif x == n-1 and y == n-1 and k >= 0:
        return True
    else:
        if maze[x][y] == 0:
            maze[x][y] = 3
        elif maze[x][y] == 2:
            k = k - 1
            maze[x][y] = 4
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if solv(nx, ny, k):
                return True
        if maze[x][y] == 3:
            maze[x][y] = 0
        elif maze[x][y] == 4:
            maze[x][y] = 2
        return False


if solv(0, 0, k):
    print("Yes")
else:
    print("No")
