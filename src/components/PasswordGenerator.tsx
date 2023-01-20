import { useState } from 'react'
import { AiOutlineCopy, AiOutlineArrowRight } from 'react-icons/ai'
import Slider from './Slider'
import CheckBoxes from './CheckBoxes'
import Strenght from './Strenght'

const PasswordGenerator = () => {
  const [password, setPassword] = useState('Generate a password')
  const [length, setLength] = useState(8)
  const [options, setOptions] = useState([
    { name: 'Lowercase', value: true },
    { name: 'Uppercase', value: true },
    { name: 'Numbers', value: true },
    { name: 'Symbols', value: true },
  ])
  return (
    <div className='w-[500px] flex flex-col gap-8'>
      <h1 className='text-zinc-400 text-xl text-center font-semibold'>
        Password Generator
      </h1>
      <div className='bg-zinc-800 flex justify-between items-center p-6'>
        <p className='text-zinc-600 text-3xl font-bold'>{password}</p>
        <AiOutlineCopy
          className='text-2xl text-green-300 cursor-pointer'
          onClick={() => {
            navigator.clipboard.writeText(password)
          }}
        />
      </div>
      <div className='bg-zinc-800 p-6 flex flex-col gap-4'>
        <div className='flex justify-between items-center'>
          <p className='text-lg'>Character Length</p>
          <p className='text-green-300 text-2xl'>{length}</p>
        </div>
        <Slider />
        <CheckBoxes />
        <Strenght />
        <div
          className='bg-green-300 p-4 flex items-center justify-center gap-4 text-zinc-900 font-bold'
          onClick={() => {
            setPassword(Math.random().toString(36).slice(-length))
          }}
        >
          <button>GENERATE</button>
          <AiOutlineArrowRight />
        </div>
      </div>
    </div>
  )
}

export default PasswordGenerator
