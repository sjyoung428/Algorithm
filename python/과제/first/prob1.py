import sys


input = sys.stdin.readline
N = int(input())
data = list(map(int, input().split()))
K = int(input())

count = 0


def solv(start, end):
    global count
    global K
    if start > end:
        return
    else:
        if data[start] < K:
            count += 1
        solv(start+1, end)


solv(0, N-1)
print(count+1)
