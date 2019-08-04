import urllib.request


f = open('./youcook2_home.html', 'w')
url = r'http://youcook2.eecs.umich.edu/explore'
headers ={'User-Agent':'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36'}
req = urllib.request.Request(url=url,headers=headers)
res = urllib.request.urlopen(req)
html = res.read().decode('utf-8')
print(html)
f.write(html)
