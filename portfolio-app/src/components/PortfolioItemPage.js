import React from 'react'

const PortfolioItem = (props) => {
  return (
    <div>
      This is in the page for portfolio item {props.match.params.id}
    </div>
  )
}

export default PortfolioItem;
