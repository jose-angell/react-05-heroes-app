import { Outlet } from 'react-router'

export const AdminLayout = () => {
  return (
    <div className='bg-blue-500'>
        <h1>Heroes Layout</h1>
        <hr />
        <Outlet/>
    </div>
  )
}
