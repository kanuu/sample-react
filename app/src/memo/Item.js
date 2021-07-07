import React, { useState, useEffect } from 'react'

function Item (props) {
  const th = {
    width: "100px"
  }
  const td = {
    textAlign: "right",
    width: "150px"
  }
  let d = new Date(Date.parse(props.value.created))
  let f = d.getMonth() + '/' + d.getDate() + ' '
      + d.getHours() + ':' + d.getMinutes()
  
  return (
  <tr><th style={th}>No, {props.index}</th>
    <td>{props.value.message}</td>
    <td style={td}>{f}</td>
  </tr>
  )
}

export default Item
