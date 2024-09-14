import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(
  ({ targetTime, timeRemaining, resetTimer }, ref) => {
    const dialog = useRef();
    useImperativeHandle(ref, () => {
      return {
        open() {
          dialog.current.showModal();
        },
        close() {
          dialog.current.close();
        },
      };
    });
    const formatedTime = (timeRemaining / 1000).toFixed(2);
    const playerLost = timeRemaining <= 0;
    const score = Math.round((1 - timeRemaining / (targetTime * 1000)) * 100);
    return (
      <dialog ref={dialog} className="result-modal" onClose={resetTimer}>
        {playerLost && <h2>You Lost</h2>}
        {!playerLost && <h2>Your Score : {score}</h2>}

        <p>
          The target time was <strong>{targetTime} seconds.</strong>
        </p>
        <p>
          You stopped the timer with{" "}
          <strong>{formatedTime} seconds left.</strong>
        </p>
        <form method="dialog" onSubmit={resetTimer}>
          <button> Close</button>
        </form>
      </dialog>
    );
  }
);

export default ResultModal;
