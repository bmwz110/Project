package main

import "fmt"

func sum(numbers ...int) int {
	s := 0
	for i := range numbers {
		s += numbers[i]
	}

	return s
}

func main() {
	fmt.Println(sum(1, 2, 3, 4))
}
