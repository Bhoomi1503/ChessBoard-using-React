import './App.css';
function App() {
  return (
    <div className="App">
      <h1>Chess Board</h1>
      <table>
        <tr className='row1'>
          <td className='white' align='center'>♜</td>
          <td className='black' align='center'>♞</td>
          <td className='white' align='center'>♝</td>
          <td className='black' align='center'>♛</td>
          <td className='white' align='center'>♚</td>
          <td className='black' align='center'>♝</td>
          <td className='white' align='center'>♞</td>
          <td className='black' align='center'>♜</td>
        </tr>
        <tr className='row2'>
          <td className='black' align='center' >♟</td>
          <td className='white' align='center'>♟</td>
          <td className='black' align='center'>♟</td>
          <td className='white' align='center'>♟</td>
          <td className='black' align='center'>♟</td>
          <td className='white' align='center'>♟</td>
          <td className='black' align='center'>♟</td>
          <td className='white' align='center'>♟</td>
        </tr>
        <tr>
          <td className='white' align='center'></td>
          <td className='black' align='center'></td>
          <td className='white' align='center'></td>
          <td className='black' align='center'></td>
          <td className='white' align='center'></td>
          <td className='black' align='center'></td>
          <td className='white' align='center'></td>
          <td className='black' align='center'></td>
        </tr>
        <tr>
        <td className='black' align='center'></td>
          <td className='white' align='center'></td>
          <td className='black' align='center'></td>
          <td className='white' align='center'></td>
          <td className='black' align='center'></td>
          <td className='white' align='center'></td>
          <td className='black' align='center'></td>
          <td className='white' align='center'></td>
        </tr>
        <tr>
          <td className='white' align='center'></td>
          <td className='black' align='center'></td>
          <td className='white' align='center'></td>
          <td className='black' align='center'></td>
          <td className='white' align='center'></td>
          <td className='black' align='center'></td>
          <td className='white' align='center'></td>
          <td className='black' align='center'></td>
        </tr>
        <tr>
        <td className='black' align='center'></td>
          <td className='white' align='center'></td>
          <td className='black' align='center'></td>
          <td className='white' align='center'></td>
          <td className='black' align='center'></td>
          <td className='white' align='center'></td>
          <td className='black' align='center'></td>
          <td className='white' align='center'></td>
        </tr>
        <tr className='row7'>
          <td className='white' align='center'>♙</td>
          <td className='black' align='center'>♙</td>
          <td className='white' align='center'>♙</td>
          <td className='black' align='center'>♙</td>
          <td className='white' align='center'>♙</td>
          <td className='black' align='center'>♙</td>
          <td className='white' align='center'>♙</td>
          <td className='black' align='center'>♙</td>
        </tr>
        <tr className='row8'>
          <td className='black' align='center'>♖</td>
          <td className='white' align='center'>♘</td>
          <td className='black' align='center'>♗</td>
          <td className='white' align='center'>♕</td>
          <td className='black' align='center'>♔</td>
          <td className='white' align='center'>♗</td>
          <td className='black' align='center'>♘</td>
          <td className='white' align='center'>♖</td>
        </tr>
      </table>
    </div>
  );
}

export default App;
