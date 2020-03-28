class Score { }
class Food {
  constructor(public element: HTMLDivElement){
    element.addEventListener("click", this.clickEventHandler.bind(this)) // この関数で使われるthisはclass自身にする。bindで渡すthisだよ。と明示する
  }
  clickEventHandler(){
    this.element.classList.toggle("food-active");
    // bindしないとthisが別のものを指す(thisがclick時の要素を示してしまうためそのそのelementはundefined。
    // thisはelementにする必要がある)
  }
}
class Foods {
  elements = document.querySelectorAll<HTMLDivElement>(".foods")
  private _activeNumberElements: number[] = []
  private _activeElements: HTMLDivElement[] = []
  constructor(){
    this.elements.forEach(element => {
      new Food(element)
    })
  }
  // get activeNumberElements(){

  // }
  get activeElements (){
    this._activeElements = []
    this.elements.forEach(elements => {
      if(elements.classList.contains("food--active")){
        this._activeElements.push(elements)
      }
    })
    return this.elements
  }
 }

 const foods = new Foods()