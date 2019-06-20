function getGreeting(name: string){
  return `Hello, ${name}`
}

export default () => <div>{getGreeting("kenji")}</div>