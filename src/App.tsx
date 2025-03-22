import './App.css'
// import { useDispatch } from 'react-redux'
// import { decrement, increment } from './redux/features/counter/counterSlice'
// import { AppDispath } from './redux/store'
// import { useAppSelector } from './redux/hook';
// import { Button } from "@/components/ui/button"
import { Link, Outlet } from 'react-router-dom';
import { ModeToggle } from './routes/mode-toggle';

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
        <p className='font-bold text-lg'>TaskPro</p>
        <nav className='flex items-center'>
          <Link className="mr-5" to="/">Tasks</Link>
          <Link className="mr-5" to="/users">Users</Link>
          <Link className="mr-5" to="/login">Login</Link>
          
          <ModeToggle/>
       
        </nav>
        
      </div>
      
      <Outlet/>
    </>
  )
}

export default App
