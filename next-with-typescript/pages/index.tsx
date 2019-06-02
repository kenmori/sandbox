function getGreeting(name){
  return `Hello, ${name}`
}

export default () => <div>{getGreeting("kenji")}</div>