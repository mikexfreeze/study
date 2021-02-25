import { Subject } from "rxjs"
import { startWith, map } from "rxjs/operators"
import { bind, Subscribe  } from "@react-rxjs/core"
import './App.css';

const textSubject = new Subject()
const setText = (newText) => textSubject.next(newText)
const [useText, text$] = bind(textSubject.pipe(startWith("")))
const [useCharCount, charCount$] = bind(text$.pipe(map((text) => text.length)))

function CharacterCount() {
  const count = useCharCount()
  return <>Character Count: {count}</>
}

function TextInput() {
  const text = useText()

  charCount$.subscribe(text => {
    console.log(text)
  })
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      Echo: {text}
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Subscribe source$={charCount$}>
        <TextInput />
        <CharacterCount />
      </Subscribe>
    </div>
  );
}

export default App;
