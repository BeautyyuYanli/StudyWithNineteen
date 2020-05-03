from PIL import Image
import os
for i in os.walk('.'):
    for j in i[2]:
        url = i[0] + '/' + j
        try:
            Image.open(url).convert('RGBA').save('.' + url.split('.')[1] + '.webp')
        except:
            pass
