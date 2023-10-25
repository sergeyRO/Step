import React, {useState} from 'react'
import TableSteps from './TableSteps'
import cross from '../assets/cross.svg'
import pencil from '../assets/pencil.svg'

export interface IForm {
    id: number,
    data: string,
    steps: number
}

let i=0

type TTable = Array<IForm>

export default function Form() {

    const [form, SetForm] = useState<IForm>(
        {
            id: 1,
            data: "",
            steps: 0
        } 
    )

    const [index, SetIndex] = useState<number>(0)    

    const [table, SetTable] = useState<TTable>([])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        SetForm(prevForm => ({...prevForm, [e.target.name]: e.target.value}))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        SetIndex(index+1)
        SetForm(prevForm => ({...prevForm, id: index}))
        table.push(form)
        SetTable([...table.sort((a,b) => new Date(b.data).valueOf() - new Date(a.data).valueOf())])
        console.log(table)  
    }   
    
    const DropStep = (/*e: React.MouseEvent<HTMLElement>*/) => {
       // console.log(e)
        //SetTable(table.filter(t => t !== product));
    }

    const UpdateStep = (e: React.MouseEvent<HTMLElement>) => {
        console.log(e)
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
            <div style={{ display: 'flex', height: '100%', fontSize: '10px', marginBottom: '10px' }}>
                <div style={{ width: '40%', float: 'left', marginRight: '10px' }}>
                    <label>Дата (ДД.ММ.ГГ)</label>
                </div>
                <div style={{ width: '40%', float: 'left', marginRight: '5px' }}>
                    <label>Пройдено км</label>
                </div>
                <div style={{ width: '20%', float: 'left', marginLeft: '5px' }}>
                    <label>Действия</label>
                </div>
            </div>
        </div>
        <div style={{clear:'both'}}>
        <div style={{ border: '1px solid black', borderRadius: '6px', height: '100%', fontSize: '10px' }}>
            {
                table.map((list,index) =>      
                    <div style={{ display: 'flex', height: '100%', fontSize: '10px', marginBottom: '10px', marginTop: '10px' }} key={index}>
                        <div style={{ width: '40%', float: 'left', marginRight: '10px' }}>
                            {list.data}
                        </div>
                        <div style={{ width: '40%', float: 'left', marginRight: '5px' }}>
                            {list.steps}
                        </div>
                        <div style={{ width: '10%', float: 'left', marginLeft: '5px' }}>
                            <img src={cross} style={{width: '12px'}} onClick={DropStep}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <img src={pencil} style={{width: '12px'}} onClick={UpdateStep}/>
                        </div>
                    </div>
                )
            }  
            </div>
            
            
        </div>           
        

    </form>
    </>
  )
}
