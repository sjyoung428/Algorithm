import time


shuffledFile = open("python\과제\second\shuffled_dict.txt",
                    'r', encoding="UTF-8")
shuffledList = shuffledFile.readlines()


shuffledDataDict = {}

for data in shuffledList:
    line = data.split()
    word = line[0]
    wordType = line[1]
    mean = " ".join(line[2::])
    shuffledDataDict[word] = wordType + " " + mean

searchFile = open("python\과제\second\search_words.txt",
                  'r', encoding="UTF-8")
searchList = searchFile.readlines()
setSearch = set(searchList)
searchList = setSearch

start = time.time()
for data in searchList:
    shuffledDataDict.pop(data.strip())


print("걸린 시간 : ", time.time() - start, "초")
