package main

import "fmt"

func printSlice(s []int) {
	fmt.Printf("len=%d, cap=%d\n", len(s), cap(s))
}

func main() {
	var s []int

	for i := 0; i < 100; i++ {
		printSlice(s)
		s = append(s, 2 * i + 1)
	}

	fmt.Println(s)

	// biuld a slice with length 16 and 20 cap
	s2 := make([]int, 16, 20)
}
  
