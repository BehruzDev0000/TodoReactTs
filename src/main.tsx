import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { TodoContext } from './context/Context.tsx'

createRoot(document.getElementById('root')!).render(
   <TodoContext>
     <App />
   </TodoContext>
)
