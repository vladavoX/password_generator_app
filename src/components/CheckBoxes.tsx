interface Props {
  options: { name: string; value: boolean; characters: string }[]
  setOptions: (
    options: { name: string; value: boolean; characters: string }[]
  ) => void
}

const CheckBoxes = ({ options, setOptions }: Props) => {
  return (
    <div className='flex flex-col gap-4'>
      {options.map((option, index) => {
        return (
          <div
            key={index}
            className='flex gap-4 items-center'
          >
            <input
              type='checkbox'
              defaultChecked={option.value}
              onChange={() => {
                const newOptions = [...options]
                newOptions[index].value = !newOptions[index].value
                setOptions(newOptions)
              }}
              className='w-5 h-5 accent-zinc-200 rounded cursor-pointer'
            />
            <label>Include {option.name}</label>
          </div>
        )
      })}
    </div>
  )
}

export default CheckBoxes
