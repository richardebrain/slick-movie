import React from 'react'
type Inputprops = {
  placeholder?: string
  label: string
  className?: string
  name?: string
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
}


const CustomInput = ({ label, name,handleChange,type, ...otherProps }: Inputprops) => {
  return (
    <div className='flex flex-col mx-auto w-[90%]'>
      {
        label &&
        <label htmlFor={name} className='text-xl'>{label}</label>
      }
      <input type={type} {...otherProps} name={name} onChange={handleChange} />
    </div>
  )
}

export default CustomInput