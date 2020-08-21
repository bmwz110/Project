package main

import (
	"bufio"
	"fmt"
	"io" 
	"io/ioutil"
	"net/http"

	"golang.org/x/net/html/charset"
	"golang.org/x/text/encoding" 
	"golang.org/x/text/transform"
)

func main() {
	res, err := http.Get("http://www.zhenai.com/zhenghun")
 
	if err != nil {
		panic(err)
	}
	defer res.Body.Close()

	if res.StatusCode != http.StatusOK {
		fmt.Println("Error: status code", res.StatusCode)
		return
	}

	e := determinEncoding(res.Body)
	utf8Reader := transform.NewReader(
		res.Body, e.NewDecoder())

	all, err := ioutil.ReadAll(utf8Reader)
	if err != nil { 
		panic(err)
	}
 
	fmt.Printf("%s\n", all)
}

// check content charset by text/encoding util
func determinEncoding(r io.Reader) encoding.Encoding {
	bytes, err := bufio.NewReader(r).Peek(1024)
	if err != nil {
		panic(err)
	}
	e, _, _ := charset.DetermineEncoding(bytes, "")

	return e
} 
