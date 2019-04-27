import urllib.request
import ssl
ssl._create_default_https_context = ssl._create_unverified_context

class Spider():
  url = 'https://book.douban.com/tag/%E5%B0%8F%E8%AF%B4'
  
  # 获取网页内容
  def __fetch_content(self):
    r = urllib.request.urlopen(Spider.url)
    htmls = r.read()
    htmls = str(htmls, encoding='utf-8')
    return htmls
  
  def __analysis(self, htmls):
    pass

  def go(self):
    htmls = self.__fetch_content()
    self.__analysis(htmls)

spider = Spider()
spider.go()