import { useState } from 'react'
import './App.css'


function App() {
  
  const [formData, setFormData] = useState({
    author: '',
    title: '',
    body: '',
    public: false
    
  });
  console.log(formData);
  
  function handleChange(e) {
    const {name, type, value, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;

    setFormData(prevData => ({
      ...prevData,
      [name]: fieldValue
    }));
  }
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
