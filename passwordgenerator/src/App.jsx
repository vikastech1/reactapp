import { useCallback, useState, useEffect, useRef} from 'react'

function App() {
  const [length ,setLength] = useState(8)
  const [numbers, setNumbers] = useState(false)
  const [characters, setCharacters]= useState(false)
  const [pass, setPass]= useState('')
  //ref hook 
  const passwordRef= useRef(null)
  
  const passwordGenerator = useCallback(() =>{
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (numbers) str +='0123456789'
    if (characters) str +='?!@#$%^&*()[]{}/`'

    for (let index = 0; index < length; index++) {
      let char = Math.floor(Math.random() * str.length +1)
      pass += str.charAt(char)
      
    }
    setPass(pass)
  },[length, numbers, characters,setPass])
  
  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    //passwordRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(pass)
  },[pass])

  useEffect(
    ()=>{
      passwordGenerator()
    },[length, numbers, characters,passwordGenerator]
  )
  return (
    <>
      
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
          <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          
            <input 
             type='text'
             value={pass}
             placeholder='password'
             className='outline-none w-full py-1 px-3'
             ref={passwordRef}  
             readOnly
             />
             <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
              copy
             </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={20}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
              />
              <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
              <input
              type='checkbox'
              checked={numbers}
              onChange={()=> setNumbers((prev) => !prev)}
              />
              <label htmlFor="numberInput">Numbers</label>

              
          </div>
          <div className='flex items-center gap-x-1'>
              <input
              type='checkbox'
              checked={characters}
              onChange={()=>{ 
                setCharacters((prev) => !prev)
              }}
              />
              <label htmlFor="charInput">Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
