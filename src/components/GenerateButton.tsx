import { AiOutlineArrowRight } from 'react-icons/ai'

interface Props {
  setPassword: (password: string) => void
  options: { name: string; value: boolean; characters: string }[]
  length: number
}

const GenerateButton = ({ setPassword, options, length }: Props) => {
  return (
    <div
      className='bg-green-300 p-4 flex items-center justify-center gap-4 text-zinc-900 font-bold'
      onClick={() => {
        let password = ''
        let characters = ''
        for (let i = 0; i < options.length; i++) {
          if (options[i].value === true) {
            characters += options[i].characters
          }
        }
        for (let i = 0; i < length; i++) {
          password += characters.charAt(
            Math.floor(Math.random() * characters.length)
          )
        }
        setPassword(password)
      }}
    >
      <button>GENERATE</button>
      <AiOutlineArrowRight />
    </div>
  )
}

export default GenerateButton
