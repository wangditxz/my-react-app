import { connect } from 'react-redux'
import { setVisibilityFilter } from '../redux/actions'
import React from 'react'
import PropTypes from 'prop-types'

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
  }
}
    




const Link = ({ active, children, onClick }) => (
    <button
       onClick={onClick}
       disabled={active}
       style={{
           marginLeft: '4px',
           flex: '1'
       }}
    >
      {children}
    </button>
)

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);