import { useState } from 'react'

import PasswordText from './PasswordText'
import Slider from './Slider'
import CheckBoxes from './CheckBoxes'
import Strength from './Strength'
import GenerateButton from './GenerateButton'

const PasswordGenerator = () => {
  const [password, setPassword] = useState('Generate a password')
  const [length, setLength] = useState(8)
  const [options, setOptions] = useState([
    {
      name: 'Uppercase',
      value: true,
      characters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    },
    {
      name: 'Lowercase',
      value: true,
      characters: 'abcdefghijklmnopqrstuvwxyz',
    },
    { name: 'Numbers', value: true, characters: '0123456789' },
    { name: 'Symbols', value: true, characters: '!@#$%^&*()_+' },
  ])
  return (
    <div className='w-[500px] flex flex-col gap-6'>
      <h1 className='text-zinc-400 text-xl text-center font-semibold'>
        Password Generator
      </h1>
      <PasswordText password={password} />
      <div className='bg-zinc-800 p-6 flex flex-col gap-6 text-zinc-200 font-medium'>
        <div className='flex justify-between items-center'>
          <p className='text-lg'>Character Length</p>
          <p className='text-green-300 text-2xl'>{length}</p>
        </div>
        <Slider />
        <CheckBoxes
          options={options}
          setOptions={setOptions}
        />
        <Strength options={options} />
        <GenerateButton
          setPassword={setPassword}
          options={options}
          length={length}
        />
      </div>
    </div>
  )
}

export default PasswordGenerator
