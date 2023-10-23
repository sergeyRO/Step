import React from 'react'

export default function TableSteps() {
  return (
    <>
        <div style={{border:'1px solid black', borderRadius:'2px',display: 'flex',height: '100%',fontSize:'10px'}}>
            <div style={{width:'40%', float:'left', marginRight:'10px'}}>
                <label>Дата (ДД.ММ.ГГ)</label>
            </div>
            <div style={{width:'40%', float:'left', marginRight:'5px'}}>
                <label>Пройдено км</label>
            </div>
            <div style={{width:'20%', float:'left', marginLeft:'5px'}}>
                <label>Действия</label>
            </div>
        </div>
    </>
  )
}
