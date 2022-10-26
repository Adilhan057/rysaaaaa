import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'

export const Header = () => {
  return (
    <div className={s.Header}>
        <NavLink to={'/posts'}>Posts</NavLink>
        <NavLink to={'/todos'}>Todos</NavLink>
    </div>
  )
}
