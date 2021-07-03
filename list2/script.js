let dom = document.querySelector('#root')
let element = React.createElement(
  'p', {}, 'Hello React!'
)
ReactDOM.render(element, dom)
