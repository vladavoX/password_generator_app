import { useState } from 'react'
import { AiOutlineCopy, AiOutlineArrowRight } from 'react-icons/ai'
import Slider from './Slider'
import CheckBoxes from './CheckBoxes'
import Strenght from './Strenght'

const PasswordGenerator = () => {
  const [password, setPassword] = useState('ad12e1nkj1f1')
  const [length, setLength] = useState(0)
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
        <div>
          <button>GENERATE</button>
          <AiOutlineArrowRight />
        </div>
      </div>
    </div>
  )
}

export default PasswordGenerator
