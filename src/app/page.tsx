"use client"
import Image from "next/image";
import Footer from "./components/Footer";
import { useState } from "react";

const defaultText = ["i", "hate", "black"];

export default function Home() {
  const [count, setCount] = useState<number>(0);
  const [texts, setTexts] = useState<string[]>(defaultText);

  function deleteLastElm(str : string[]){
    // returns new array without last element
    const tempStr = [...str];
    tempStr.pop();
    return tempStr;
  }
  
  function doSomething(str : string, index: number) {
    return <p key={index} className="my-10">{str}</p>
  }

  return (
    <div className="flex flex-col items-center jusitfy-center">
      <h1>Count: </h1>
      <p>{count}</p>
      <button onClick={() => setCount(count+1)} className="text-black w-[100px] h-[20px] bg-white mb-10">Increase me</button>
      {/* {(() => <p class}Name="my-10">penis</p>)()} */}
      {/* {texts.map((text, index) => doSomething(text,index))} */}
      {/* renders all text */}
      {texts.map((text, index) => <p key={index} className="my-10">{text}</p>)}
      <button className="text-black w-[100px] h-[20px] bg-white my-10" onClick={() => setTexts(deleteLastElm(texts))}>Delete</button>
      <Footer />
    </div>
  );
}