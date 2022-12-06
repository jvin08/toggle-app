import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article'
import './App.css'

const getStorageTheme = () => {
  let theme = 'black-theme'
  if(localStorage.getItem('theme')){
    theme = localStorage.getItem('theme')
  }
  return theme
}


function App() {
  const [theme, setTheme] = useState(getStorageTheme)

  const toggleTheme = () => {
    if (theme === 'black-theme') {
      setTheme('yellow-theme')
    } else if (theme === 'yellow-theme') {
      setTheme('green-theme')
    } else {
      setTheme('black-theme')
    }
  }

  useEffect(() => {
    document.documentElement.className = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  return <main>
    <nav>
      <div className='nav-center'>
        <h1>overreacted</h1>
        <button className='btn' onClick={toggleTheme}>toggle</button>
      </div>
    </nav>
    <section className='articles'>
      {data.map((article) => {
        return <Article key={article.id} {...article} />
      })}
    </section>
  </main>
}

export default App
