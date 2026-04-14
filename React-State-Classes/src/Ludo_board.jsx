import { useState } from 'react';

export default function LudoBoard(){
    let [moves , setmoves] = useState({blue : 0 , green : 0 , red : 0 , yellow : 0});

    let updateMoves = () => {
        setmoves((prevMoves) => {return {...prevMoves , blue : prevMoves.blue + 1}});
    }
    return (
        <div>
            <h1>Ludo Board</h1>
            <div className="board">
                <p>
                    blue moves = {moves.blue}
                </p>
                <button onClick={updateMoves}>
                    +1
                </button>
                <p>
                    Yellow moves =
                </p>
                <button>+1</button>
                <p>
                    Green moves =
                </p>
                <button>+1</button>
                <p>
                    Red moves =
                </p>
                <button>+1</button>
            </div>
        </div>
    );
}