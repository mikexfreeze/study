package com.imooc;

public class Dog extends Animal {
    public int age = 20 ;
    public void eat(){
        System.out.println("Dog 吃东西");
    }
    public void method(){
        eat();
    }

    public Dog(){
        System.out.println("Dog 类构建成功");
    }

    @Override
    public String toString() {
        return "Dog{" +
                "age=" + age +
                '}';
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Dog other = (Dog) obj;
        if (age != other.age)
            return false;
        return true;
    }

}
