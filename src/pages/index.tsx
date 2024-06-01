import { Toast } from "primereact/toast"
import React, { useRef } from "react"
import { Button } from "primereact/button"
 
const Home = () => {
  const toast = useRef<Toast>(null)

  const show = () => {
       toast.current?.show({ severity: 'warn', summary: 'Secondary', detail: 'Message Content', life: 3000 });
     
  }

  return (
    <div className='card flex justify-content-center'>
      <Toast ref={toast} />
      <Button onClick={show} label='Show' />
    </div>
  )
}
export default Home
