import { useState } from 'react'
import './App.css'

const [formData, setFormData] = useState({
author: '',
title: '',
body: '',
public: false

});
console.log(formData);

function App() {

  return (
    <form><label htmlFor="author">Autore</label>
    <input
    type="text" 
    id='author'
    name='author'
    value={formData.author}
    onChange={handleChange}/>
    </form>
  )
}

export default App
