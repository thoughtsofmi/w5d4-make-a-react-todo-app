import React, { Component } from 'react'


const TodoItem = (props) => (
    <div className="row">
    <div className="col-sm-12">
    <div>
<h5>{props.data}</h5>
</div>
</div>
</div>
)

export default TodoItem
