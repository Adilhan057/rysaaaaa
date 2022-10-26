import React from 'react'
import { Router, Routes } from 'react-router-dom'
import { Header } from '../Header/Header'
import { Posts } from '../Posts/Posts'
import { Todos } from '../Todos/Todos'
import './App.css'

export const App = () => {
  return (
    <div>
      
        <Header />

        <Routes >
            <Router index path='/todos' element={<Todos />} />
            <Router path='/posts' element={<Posts />} />
        </Routes>
    </div>
  )
}
