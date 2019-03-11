import React, { PropTypes } from 'react'

const TodoListFooter = ({ setFilter }) => (
  <footer className='footer'>
    <ul className='filters'>
      <li>
        <a href='#/' onClick={() => setFilter('SHOW_ALL')}>
          All
        </a>
      </li>
      <span> </span>
      <li>
        <a href='#/active' onClick={() => setFilter('SHOW_ACTIVE')}>
          Active
        </a>
      </li>
      <span> </span>
      <li>
        <a href='#/completed' onClick={() => setFilter('SHOW_COMPLETED')}>
          Completed
        </a>
      </li>
    </ul>
  </footer>
)

TodoListFooter.propTypes = {
  setFilter: PropTypes.func.isRequired,
}

export default TodoListFooter
