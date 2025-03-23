import './App.css'
import { Link, Outlet } from 'react-router-dom';
import { ModeToggle } from './components/ui/mode-toggle';
import { useTheme } from "@/providers/theme-provider";
import { cn } from './lib/utils';
function App() {


  const {theme} = useTheme()
  
  return (
    <div className='overflow-hidden'>
      <div className={cn(
        "scroll-container flex justify-center gap-[50vw] fixed top-0 left-0 right-0 mx-auto p-4 z-10",
                {
                    "text-black bg-white": theme == "light",
                    "text-white bg-black": theme == "dark",
                })}>
        <p className='font-bold text-2xl'>TaskPro</p>
        <nav className='flex items-center'>
          <Link className="mr-5" to="/">Tasks</Link>
          <Link className="mr-5" to="/users">Users</Link>
          <Link className="mr-5" to="/login">Login</Link>
          
          <ModeToggle/>
       
        </nav>
        
      </div>
      
      <div className='flex-1 pt-16 overflow-y-auto'>
        <Outlet/>
      </div>
    </div>
  )
}

export default App
