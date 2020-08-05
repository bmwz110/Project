package main

import (
	"fmt"
)

type treeNode struct {
	value       int
	left, right *treeNode
}

func main() {
	var root treeNode
	fmt.Println(root)

	root = treeNode{value: 3}
}
