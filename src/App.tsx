import './App.css'
// import { useDispatch } from 'react-redux'
// import { decrement, increment } from './redux/features/counter/counterSlice'
// import { AppDispath } from './redux/store'
// import { useAppSelector } from './redux/hook';
// import { Button } from "@/components/ui/button"
import { Link, Outlet } from 'react-router-dom';

function App() {

  // const dispatch : AppDispath = useDispatch();
  // const count = useAppSelector((state) => state.counter.count);
   
  // const handleIncrement = (amount:number) => {
  //   dispatch(increment(amount))
  // }
  // const handleDecrement = () => {
  //   dispatch(decrement())
  // }

  // console.log(count)

  return (
    <>
      <div className='flex justify-center gap-[50vw]'>
        <p className='font-bold'>TaskPro</p>
        <nav>
          <Link className='bg-red-100 mr-5 p-1 rounded-sm' to="/">Tasks</Link>
          <Link className='bg-red-100 mr-5 p-1 rounded-sm' to="/users">Users</Link>
          <Link className='bg-red-100 mr-5 p-1 rounded-sm' to="/login">Login</Link>
        </nav>
      </div>


      <Outlet/>
    </>
  )
}

export default App
