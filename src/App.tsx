import { useEffect, useRef, useState } from 'react'


function App() {
  const myRef = useRef(0)
  const [state, setState] = useState<number>(0)

  useEffect(() => {
    let x = () => setState(window.scrollY);
      window.addEventListener('scroll', x  )

      return ()=> window.removeEventListener('scroll', x )
  }, []);

  const y = ()=> {
    setState(state+1);
    setState(state+1);
    fetch('https://fakestoreapi.com/products/1').then((res)=> res.json()).then((res)=> console.log(res))
    setState(state+1);
    setState(state+1);
    
  }

  return (
    <>
    <button onClick={y}>xxxx</button>
    <button onClick={()=> myRef.current= myRef.current+1}>yyyy</button>
   {state}
   {myRef.current}
     </>
  )
}

export default App
