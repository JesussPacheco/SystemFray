import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { Usersapp } from './UsersApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Usersapp />
  </StrictMode>,
)
