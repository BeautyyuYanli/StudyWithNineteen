import os
arr = []
for i in os.walk('pics'):
    for j in i[2]:
        arr.append(i[0] + '/' + j)
print(arr)