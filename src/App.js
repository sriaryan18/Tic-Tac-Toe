import './styles/board.css';
import Square from './components/square';
import { useState } from 'react';

function App() {
  const [Icon,setIcon] = useState(Array(9).fill(null));
  const [User,setUser] = useState(1)

  const checkWinner=(copy)=>{
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (copy[a] && copy[a] === copy[b] && copy[a] === copy[c]) {
        if(copy[a]==='fas fa-times') return "User 2 won";
        return "User 1 won"
      }
    }
  }
  const reset = ()=>{
    console.log("ye");
    setIcon(Array(9).fill(null))
  }

  const handleClick = async (i)=>{
    const copy=Icon.slice()
    if(Icon[i]!=null){
      alert('Already Occupied')
      return
    }
    if(User === 1){

      copy[i]='fas fa-circle'
      setUser(2);
    }else{
      copy[i]='fas fa-times'
      setUser(1)
    }
    // console.log("I am copy",copy);
    await setIcon(copy);
    const winner=checkWinner(copy);
    if(winner !=null)

    {  alert(winner);
      reset()
    }

  }
 return(
   <>
  <div className="board-container">
  <div>
    <h1>Tic Tac Toe</h1>
  </div>
    <div>
      <Square icon={Icon[0]} changeIcon={handleClick} value={1}/>
      <Square icon={Icon[1]} changeIcon={handleClick} value={2}/>
      <Square icon={Icon[2]} changeIcon={handleClick} value={3}/>
    </div>
    <div>
      <Square icon={Icon[3]} changeIcon={handleClick} value={4}/>
      <Square icon={Icon[4]} changeIcon={handleClick} value={5}/>
      <Square icon={Icon[5]} changeIcon={handleClick} value={6}/>
    </div>
    <div>
    <Square icon={Icon[6]} changeIcon={handleClick} value={7}/>
      <Square icon={Icon[7]} changeIcon={handleClick} value={8}/>
      <Square icon={Icon[8]} changeIcon={handleClick} value={9}/>
    </div>
    
  </div>
   </>
 )
}

export default App;
