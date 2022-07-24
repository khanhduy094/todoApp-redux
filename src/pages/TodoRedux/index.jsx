import { Divider } from 'antd'
import Title from 'antd/lib/skeleton/Title'
import React from 'react'
import Filters from '../../components/Filters'
import TodoList from '../../components/TodoList'

export default function TodoRedux() {
  return (
    <div
      style={{
        width: 500,
        margin: '15px auto',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        padding: 20,
        boxShadow: '0 0 10px 4px #bfbfbf',
        borderRadius: 5,
        height: '90vh',
      }}
    >
      <div style={{ textAlign: 'center', fontWeight: "bold", textTransform: "uppercase" }}>todo app with redux</div>
      <Filters />
      <Divider />
      <TodoList />
    </div>
  )
}
