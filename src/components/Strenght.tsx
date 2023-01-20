interface Props {
  options: { name: string; value: boolean; characters: string }[]
}

const Strenght = ({ options }: Props) => {
  let strenght = 0
  for (let i = 0; i < options.length; i++) {
    if (options[i].value === true) {
      strenght++
    }
  }
  let bg = ''
  if (strenght === 1) bg = 'bg-green-300'
  if (strenght === 2) bg = 'bg-yellow-300'
  if (strenght === 3) bg = 'bg-orange-400'
  if (strenght === 4) bg = 'bg-red-600'
  return (
    <div className='flex justify-between items-center bg-zinc-900 p-6 font-bold text-zinc-500'>
      <p>STRENGHT</p>
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

export default Strenght
