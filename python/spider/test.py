import urllib.request
import ssl
ssl._create_default_https_context = ssl._create_unverified_context
r = urllib.request.urlopen("http://movie.douban.com/typerank?type_name=%E5%89%A7%E6%83%85&type=11&interval_id=100:90&action=")
print(r)

# import urllib.request
# r = urllib.request.urlopen("http://www.baidu.com")
# print(r)