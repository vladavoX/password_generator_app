interface Props {
  options: { name: string; value: boolean; characters: string }[]
}

const Strength = ({ options }: Props) => {
  let strength = 0
  for (let i = 0; i < options.length; i++) {
    if (options[i].value === true) {
      strength++
    }
  }
  let bg = ''
  if (strength === 1) bg = 'bg-green-300'
  if (strength === 2) bg = 'bg-yellow-300'
  if (strength === 3) bg = 'bg-orange-400'
  if (strength === 4) bg = 'bg-red-600'
  return (
    <div className='flex justify-between items-center bg-zinc-900 p-6 font-bold text-zinc-500'>
      <p>STRENGTH</p>
      <div className='flex gap-2'>
        {options.map((option, index) => {
          return (
            <div
              key={index}
              className={`h-7 w-3 border-2 border-zinc-200 ${bg}`}
            ></div>
          )
        })}
      </div>
    </div>
  )
}

export default Strength
