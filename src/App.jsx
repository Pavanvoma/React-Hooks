import { useState } from 'react'

import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'


import FormValidation from './assets/Formvalidation'
import { ThemeProvider } from './assets/ThemeContext'
import ThemeToggle from './assets/ThemeToggle'
import OptimizedList from './assets/OptmizedList'


function App() {
  

  return (
    <>
   
    
    <ThemeProvider/>
        <ThemeToggle/>
        <FormValidation/>
        <OptimizedList/>
    <ThemeProvider/>

        
    </>
  )
}

export default App
