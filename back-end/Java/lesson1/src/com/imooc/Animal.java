package com.imooc;

public class Animal extends Object{
    public int age = 10 ;
    public String name;
    public void eat(){
        System.out.println("动物吃东西");
    }
    public Animal(){
        System.out.println("Animal 类构建成功");
    }
    public Animal(int age){
        this.age = age;
    }
}
