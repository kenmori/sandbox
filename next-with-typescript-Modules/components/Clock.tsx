interface Props {
  time: string;
}

export const Clock = ({ time }: Props) => (
  <div>
    Time: <time>{time}</time>
  </div>
);

const email = document.getElementById("email");

if(email){
  email.addEventListener("change", (e) => {
      const input = e.currentTarget as HTMLInputElement;
      console.log(input.value)
  })
}

interface A {
  [key: string]: number | string;
  sumProps: string;
}

const a: A = { sumProps : "some props"}

a.x = 1
a.y = 2;

interface Sum {
  (a: number, b: number): number;
  prop1: string;
}

// const sum: Sum = (a, b) => a + b
sum.prop1 = "fafa"

interface Parent {
  x: string
}

interface Parent2 {
  y: string
}


interface Parent3 {
  z: string
}


interface Child extends Parent, Parent2, Parent3 {}

let child: Child = {x: "fafa", y: "y", z: "z"}

function sum(a: number, b: number = 0): number {
  return a + b
}

sum(1);

type MyFunc = (a: number, b: number) => number;
const sum2: MyFunc = (a, b) => a + b
