import { useState } from "react"

export function NewToDoForm({onSubmit}) {
    const [newItem, setNewItem] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
    
        if(newItem === "") return

        onSubmit(newItem)

        setNewItem("")
      }

    return (
        <form className='new-item-form' onSubmit={handleSubmit}>
      <div className='form-row'>
        <label htmlFor="item">New Item</label>
        <input 
        value={newItem} 
        onChange={e => setNewItem(e.target.value)} 
        type="text" 
        id='item'
        />
      </div>
      <button className='btn'>Add</button>
    </form>
    )
}