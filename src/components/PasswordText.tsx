import { AiOutlineCopy } from 'react-icons/ai'

interface Props {
  password: string
}

const PasswordText = ({ password }: Props) => {
  return (
    <div className='bg-zinc-800 flex justify-between items-center p-6'>
      <p className='text-zinc-600 text-3xl font-bold'>{password}</p>
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
