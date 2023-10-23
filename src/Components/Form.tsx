import React from 'react'
import TableSteps from './TableSteps'

export interface IForm{
    data: string,
    steps: number
}

export default function Form() {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        console.log(e.target.value)
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(e.target)
    
    }        
  return (
    <>
    <form onSubmit={handleSubmit}>
        <div style={{width:'35%', float:'left', marginRight:'10px',paddingBottom:'10px'}}>
            <label htmlFor='DateSteps'>Дата (ДД.ММ.ГГ)</label><br/>
            <input name='DateSteps' id='DateSteps' type='date' onChange={handleChange}/>
        </div>
        <div style={{width:'47%', float:'left', marginRight:'5px'}}>
            <label htmlFor='Steps'>Пройдено км</label><br/>
            <input name='Steps' id='Steps' onChange={handleChange}/>
        </div>
        <div style={{width:'0%', float:'left', marginLeft:'15px'}}>
            <br />
            <button type="submit">OK</button>
        </div>
    
        <div style={{clear:'both'}}>
            <TableSteps />
        </div>
    </form>
    </>
  )
}
