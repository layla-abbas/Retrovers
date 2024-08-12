

export default function Modal({ restartGame }) {

  return (
    <div >
      <div className="boom-tryAgain" onClick={() => restartGame()}>
        Try Again
      </div>
    </div>
  );
}
