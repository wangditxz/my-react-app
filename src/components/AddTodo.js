import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../redux/actions'

const style1 = {
    width: '100%',
    display: 'flex'
};
const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div style={{width: '100%'}}>
      <form style={style1} onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input style={{flex: '1'}} ref={node => input = node} />
        <button type="submit">
          添加
        </button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)
