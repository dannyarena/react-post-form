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
    <>
    <form>
      <label htmlFor="author">Autore</label>
    <input
    type="text" 
    id='author'
    name='author'
    value={formData.author}
    onChange={handleChange}/>

    <label htmlFor="title">Titolo</label>
    <input
    type="text" 
    id='title'
    name='title'
    value={formData.title}
    onChange={handleChange}/>
    

     <label htmlFor="body">Contenuto</label>
    <textarea
    type="text" 
    id='body'
    name='body'
    value={formData.body}
    onChange={handleChange}/>

    <label htmlFor="public">Pubblica</label>
    <input
    type="checkbox" 
    id='public'
    name='public'
    value={formData.public}
    onChange={handleChange}/>
    </form>

    </>
  )
}

export default App
