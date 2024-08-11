import { useAppContext } from "../../contexts/Context";
import { takeBack } from "../../../reducer/actions/move";
import "./MovesList.css";

const TakeBack = () => {
  const { dispatch } = useAppContext();

  return (
    <div>
      <button className="chessBtn" onClick={() => dispatch(takeBack())}>Take Back</button>
    </div>
  );
};

export default TakeBack;
