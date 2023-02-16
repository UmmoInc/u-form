import React,{ forwardRef, useImperativeHandle } from "react";

const Child = forwardRef((props, ref) => {
    useImperativeHandle(ref, () => ({
      log() {
        console.log("child function");
      }
    }));
  
    return <h1>Child</h1>;
  });