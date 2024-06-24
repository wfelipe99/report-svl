import { twMerge } from 'tailwind-merge'
import './Summary.css'

type Props = {
  classNames?: string
  title: string
}

function Summary({ title, classNames }: Props) {
  return (
    <div
      className={twMerge(
        'flex flex-col w-11/12 border-2 border-black',
        classNames,
      )}
    >
      <div className="bg-red-700 text-center text-white uppercase">
        <h4>{title}</h4>
      </div>

      <div>
        <textarea className="lines w-full p-8" rows={10} />
      </div>
    </div>
  )
}

export default Summary
