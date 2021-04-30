import React, {useState} from 'react'

const Input = ({onAdd}) => {
   const [input, setInput] = useState('');

   const onSubmit = (e) => {
      e.preventDefault();

      if(!input) {
         alert('Add a task!');
         return;
      }
      
      onAdd(input);
      setInput('');
   }

   return (
      <form className="form" onSubmit={onSubmit} >
         <label className="label">Write what you have to do</label>
         <input type="text" placeholder="Do..." className="input" value={input} onChange={(e) => setInput(e.target.value)}/>
         <input type="submit" className="btn" value="OK"/>
      </form>
   )
}

export default Input
