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
    <div></div>
  )
}

export default App
