import { useState } from 'react'
import { AiOutlineCopy } from 'react-icons/ai'

const PasswordGenerator = () => {
  const [password, setPassword] = useState('ad12e1nkj1f1')
  return (
    <div className='w-[500px] flex flex-col gap-8'>
      <h1 className='text-zinc-400 text-xl text-center'>Password Generator</h1>
      <div className='bg-zinc-800 flex justify-between items-center p-4'>
        <p className='text-zinc-600 text-3xl font-bold'>1487asfasf8asfa</p>
        <AiOutlineCopy
          className='text-2xl text-green-300 cursor-pointer'
          onClick={() => {
            navigator.clipboard.writeText(password)
          }}
        />
      </div>
    </div>
  )
}

export default PasswordGenerator
