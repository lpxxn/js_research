import './app.css';

// jsx
// 1. 识别常规变量
const name = 'Hello World';
// 2 原生js方法调用
const getAge = (_) => 18;
const getHader =(t) => {
  if (t === 1) {
    return <h1>h1</h1>
  }
  if (t === 2) {
    return <h2>h2</h2>
  }
  return <h3>h3</h3>
}
// 3. 三元运算符
const flag = true;

// 4. 数组
const arr = [1, 2, 3, 4, 5];
// if/switch/变量声明，这些是语句，不是表达式，不能直接放在jsx {}中

// key 只在内部使用，不会出现在真实dom中
const songs = [
  {id: 1, name: 'song1'},
  {id: 2, name: 'song2'},
  {id: 3, name: 'song3'},
]

// css stype 
const stypeObj = {
  color: 'red'
}
// css className eg: className='age'

const showTitle = true;
function App() {
  return (
    <div className="App">
      {getHader(2)}
      <p style={stypeObj} >{name}</p>
      <p className='age'>{ getAge()}</p>
      { flag ? <p>flag is true</p> : <p>flag is false</p>}
      {/*  null 不会渲染 */}
      {true ? null: <p>flag is false</p>} 
      { arr.map((item, index) => <em key={index}>{item}</em>)}
      {/* { songs.map(song => <p key={song.id}>{song.name}</p>)} */}
      <ul>
        { songs.map(song => <li key={song.id}>{song.name}</li>)}
      </ul>
      <div className={showTitle ? 'title': ''}>App</div>
    </div>
  );
}

export default App;
