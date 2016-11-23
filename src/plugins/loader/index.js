const install = Vue => {
  Vue.$myLog = value => console.log(value)
}

export default { install }
