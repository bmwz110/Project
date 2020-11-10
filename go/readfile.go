package main

import {
	"io/ioutil"
	"fmt"
}

func main() 
	const filename = "test.txt"
	contents, err := ioutil.ReadFile(filename)
	if err != nil {
		fmt.Println(err)
	} else { 
		fmt.Printf("%s\n", contents)
	} 
}
  
