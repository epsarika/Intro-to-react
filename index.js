const reactContentRoot = document.getElementById("root")
const reactContentHead = document.getElementById("head")

const myFirstElement = React.createElement("h1", null,"Fruits")

const mySecondElement = React.createElement("ul", null, [
    React.createElement("li", null, "Apple"),
    React.createElement("li", null, "Banana"),
    React.createElement("li", null, "Mango"),
    React.createElement("li", null, "Orange"),
    React.createElement("li", null, "Pineapple")
])

ReactDOM.render(myFirstElement, reactContentHead)
ReactDOM.render(mySecondElement, reactContentRoot)