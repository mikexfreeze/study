package main

import (
	"fmt"
	"unsafe"
)

const i = "测试所谓让他去为何会出现送i哦怕太平军阿瑟东"

func main() {
	//var i int32 = 1
	fmt.Print(i)
	fmt.Print("\n")
	fmt.Print(unsafe.Sizeof(i))
}
