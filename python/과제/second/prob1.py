import time


class Node(object):
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None


class BST(object):
    def __init__(self):
        self.root = None

    def insert(self, data):
        self.root = self.insertValue(self.root, data)
        return self.root is not None

    def insertValue(self, node, data):
        if node is None:
            node = Node(data)
        else:
            if list(data.keys())[0] <= list(node.data.keys())[0]:
                node.left = self.insertValue(node.left, data)
            else:
                node.right = self.insertValue(node.right, data)
        return node

    def delete(self, key):
        self.root, deleted = self.deleteValue(self.root, key)
        return deleted

    def deleteValue(self, node, key):
        if node is None:
            return node, False

        deleted = False
        if key == list(node.data.keys())[0]:
            deleted = True
            if node.left and node.right:
                parent, child = node, node.right
                while child.left is not None:
                    parent, child = child, child.left
                child.left = node.left
                if parent != node:
                    parent.left = child.right
                    child.right = node.right
                node = child
            elif node.left or node.right:
                node = node.left or node.right
            else:
                node = None
        elif key < list(node.data.keys())[0]:
            node.left, deleted = self.deleteValue(node.left, key)
        else:
            node.right, deleted = self.deleteValue(node.right, key)
        return node, deleted


bst = BST()


shuffledFile = open("python\과제\second\shuffled_dict.txt",
                    'r', encoding="UTF-8")
shuffledList = shuffledFile.readlines()

for data in shuffledList:
    line = data.split()
    word = line[0]
    wordType = line[1]
    mean = " ".join(line[2::])
    dict = {word: wordType + " " + mean}
    bst.insert(dict)

shuffledFile.close()

searchFile = open("python\과제\second\search_words.txt",
                  'r', encoding="UTF-8")
searchList = searchFile.readlines()


start = time.time()
for data in searchList:
    bst.delete(data.strip())
print("걸린 시간 :", time.time() - start, "초")

searchFile.close()
