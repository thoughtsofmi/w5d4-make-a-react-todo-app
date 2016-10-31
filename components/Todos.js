import React, { Component } from 'react'
import TodoItem from './TodoItem'



const Todos = (props) => {
    const items = props.data.map((item, i) => {
        return <TodoItem data={item} key={i} />
    })

    return (
        <div>
            <h5>Walk the Dog</h5>
            
            <h5>Vaccum the floors</h5>
            <h5>Put away the dishes</h5>
            <h5>Study React!</h5>
            {items}
        </div>
    )
}
export default Todos
