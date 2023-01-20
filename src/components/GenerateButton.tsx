import { AiOutlineArrowRight } from 'react-icons/ai'

interface Props {
  setPassword: (password: string) => void
}

const GenerateButton = ({ setPassword }: Props) => {
  return (
    <div
      className='bg-green-300 p-4 flex items-center justify-center gap-4 text-zinc-900 font-bold'
      onClick={() => {
        setPassword(Math.random().toString(36).slice(-length))
      }}
    >
      <button>GENERATE</button>
      <AiOutlineArrowRight />
    </div>
  )
}

export default GenerateButton
