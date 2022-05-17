from collections import deque


n, k = map(int, input().split())

map_data = []
virus_data = []

for i in range(n):
    map_data.append(list(map(int, input().split())))
    for j in range(n):
        if map_data[i][j] != 0:
            virus_data.append((map_data[i][j], 0, i, j))

target_s, target_x, target_y = map(int, input().split())

virus_data.sort()

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]


def solv():
    queue = deque(virus_data)

    while queue:
        virus, s, x, y = queue.popleft()

        if s == target_s:
            break

        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]

            if ((0 <= nx < n) and (0 <= ny < n)):
                if map_data[nx][ny] == 0:
                    map_data[nx][ny] = virus

                    queue.append((virus, s+1, nx, ny))


solv()

print(map_data)
