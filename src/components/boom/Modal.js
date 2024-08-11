

export default function Modal({ restartGame }) {

  return (
    <div >
      <div className="tryAgain" onClick={() => restartGame()}>
        Try Again
      </div>
    </div>
  );
}
