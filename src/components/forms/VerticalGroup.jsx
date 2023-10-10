import { twMerge } from 'tailwind-merge'

const VerticalGroup = ({ children, label, className = '' }) => {
  return (
    <div className={twMerge('flex flex-col gap-y-2', className)}>
      {label ? <label htmlFor="" className='font-semibold'>{label}</label> : null}
      {children}
    </div>
  )
}

export default VerticalGroup
