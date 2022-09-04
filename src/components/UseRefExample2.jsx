import { useState, useEffect, useRef } from 'react'

function UseRefExample2() {
  const [name, setName] = useState('')

  const renders = useRef(1)
  const prevName = useRef('')

  useEffect(() => {
    console.log(renders.current)
    renders.current = renders.current + 1
    console.log(renders.current)
    prevName.current = name
  }, [name])

  return (
    <div>
      <h1>Renders: {renders.current}</h1>
      <h2>Prev Name State: {prevName.current}</h2>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
        className='form-control mb-3'
      />
    </div>
  )
}

export default UseRefExample2