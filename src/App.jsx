import { useState } from 'react'
import axios from 'axios';
import './App.css'


function App() {
  
   // stato che controlla tutti gli input
  const [formData, setFormData] = useState({
    author: '',
    title: '',
    body: '',
    public: false
    
  });
  console.log(formData);
  const [feedback, setFeedback] = useState("")

  function handleChange(e) {
    const {name, type, value, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;

    setFormData(prevData => ({
      ...prevData,
      [name]: fieldValue
    }));
  }
function handleSubmit(e) {
  e.preventDefault();
  axios.post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", formData)
  .then(res => {
    console.log("Post riuscito!", res.data);
    setFeedback("Post inviato con successo!");
  })
  .catch(err => {
    console.log("Errore")
    setFeedback("Errore durante l'invio. Riprova.");
  });
}

  return (
    <>
    <form onSubmit={handleSubmit}>
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
    checked={formData.public}
    onChange={handleChange}/>

    <button type='submit'>invia</button>

    {feedback && <p>{feedback}</p>}
    
    </form>

    </>
  );
}

export default App;
