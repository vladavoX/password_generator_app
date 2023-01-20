import ReactSlider from 'react-slider'

interface Props {
  setLength: (length: number) => void
}

const Slider = ({ setLength }: Props) => {
  return (
    <div>
      <ReactSlider
        className='flex items-center pr-2'
        thumbClassName='cursor-pointer w-6 h-6 rounded-full shadow-md outline-none bg-zinc-200'
        trackClassName='cursor-pointer h-2 bg-zinc-900 rounded-full'
        min={0}
        max={16}
        defaultValue={0}
        onChange={(value) => setLength(value as number)}
      />
    </div>
  )
}

export default Slider
