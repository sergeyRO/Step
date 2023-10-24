import React, {useState} from 'react'
import TableSteps from './TableSteps'

export interface IForm {
    data: string,
    steps: number
}

type TTable = Array<IForm>

export default function Form() {
    const [form, SetForm] = useState<IForm>(
        {
            data: "",
            steps: 0
        }
    )
    const [table, SetTable] = useState<TTable>([])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        console.log(e.target.value)
        console.log(e.target.name)
        SetForm(prevForm => ({...prevForm, [e.target.name]: e.target.value}))
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(form)
        table.push({
            form
        })
        console.log(table)
      /* SetTable(prevTable => ({...prevTable,
        push({
            data: form.data,
            steps: form.steps
    })}))*/
        
    }        
  return (
    <>
    <form onSubmit={handleSubmit}>
        <div style={{width:'35%', float:'left', marginRight:'10px',paddingBottom:'10px'}}>
            <label htmlFor='data'>Дата (ДД.ММ.ГГ)</label><br/>
            <input name='data' id='data' type='date' onChange={handleChange}/>
        </div>
        <div style={{width:'47%', float:'left', marginRight:'5px'}}>
            <label htmlFor='steps'>Пройдено км</label><br/>
            <input name='steps' id='steps' onChange={handleChange}/>
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
