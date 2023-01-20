import { AiOutlineCopy } from 'react-icons/ai'

interface Props {
  password: string
  length: number
  options: {
    name: string
    value: boolean
    characters: string
  }[]
}

const PasswordText = ({ password, length, options }: Props) => {
  let counter = 0
  for (let i = 0; i < options.length; i++) {
    if (options[i].value) {
      counter++
    }
  }
  return (
    <div className='bg-zinc-800 flex justify-between items-center p-6'>
      <p className='text-zinc-600 text-3xl font-bold'>
        {length === 0
          ? 'Increase length'
          : counter === 0
          ? 'Select at least one option'
          : password}
      </p>
      <AiOutlineCopy
        className='text-2xl text-green-300 cursor-pointer'
        onClick={() => {
          navigator.clipboard.writeText(password)
        }}
      />
    </div>
  )
}

export default PasswordText
