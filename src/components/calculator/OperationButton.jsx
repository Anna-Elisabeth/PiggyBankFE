import { ACTIONS } from "./CreateCalculator"

export default function OperationButton({ dispatch, operation }) {
    return (
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
        }
      >
        {operation}
      </button>
    )
  }