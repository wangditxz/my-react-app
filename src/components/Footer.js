import React from 'react'
import FilterLink from './FilterLink'
import { VisibilityFilters } from '../redux/actions'

const Footer = () => (
  <div style={{flex: '1', display: 'flex', alignContent: 'center'}}>
    <span style={{flex: '1', display: 'flex', alignContent: 'center'}}>Show: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
      All
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
      Active
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
      Completed
    </FilterLink>
  </div>
)

export default Footer
