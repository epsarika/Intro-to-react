const reactContentRoot = document.getElementById("root")
const reactContentHead = document.getElementById("head")

const myFirstElement = (<h1>FRUITS</h1>)
const mySecondElement = (<ul>
    <li>Apple</li>
    <li>Banana</li>
    <li>Mango</li>
    <li>Orange</li>
    <li>Pineapple</li>
</ul>)

ReactDOM.render(myFirstElement, reactContentHead)
ReactDOM.render(mySecondElement, reactContentRoot)