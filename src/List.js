import React, { useState, useContext } from 'react'
// import styled from 'styled-components'
import { DataContext } from './App'

function List() {
    const data = useContext(DataContext)
    console.log('data', data)
    // const [str, setStr] = useState('')
    return (
        <div>
            {data ? data.map(d => <div key={`${d.id}`}>{d.val}</div>) : <p>No data.</p>}
        </div>
    )
}

export default List
