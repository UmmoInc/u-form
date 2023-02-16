const Parent = () => {
    const ref = useRef();
  
    return (
      <div>
        <Child ref={ref} />
        <button onClick={() => ref.current.log()}>Click</button>
      </div>
    );
  };