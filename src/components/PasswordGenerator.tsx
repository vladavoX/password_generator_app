import { useState } from 'react'
import Slider from './Slider'
import CheckBoxes from './CheckBoxes'
import Strenght from './Strenght'
import PasswordText from './PasswordText'
import GenerateButton from './GenerateButton'

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
      <PasswordText password={password} />
      <div className='bg-zinc-800 p-6 flex flex-col gap-4'>
        <div className='flex justify-between items-center'>
          <p className='text-lg'>Character Length</p>
          <p className='text-green-300 text-2xl'>{length}</p>
        </div>
        <Slider />
        <CheckBoxes />
        <Strenght />
        <GenerateButton setPassword={setPassword} />
      </div>
    </div>
  )
}

export default PasswordGenerator
