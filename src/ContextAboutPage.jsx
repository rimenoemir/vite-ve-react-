import { useContext } from "react";
import { SiteContext } from "./context/SiteContext";
import { DECREMENT, INCREMENT, RESET } from "./reducer/counter";

export default function ContextAboutPage() {
  const {
    counter: { state, dispatch },
  } = useContext(SiteContext);

  return (
    <div>
      <h2>Context About Page : Context API Kullanıldı...</h2>
      <h2>{state} </h2>
      <button onClick={() => dispatch(INCREMENT)}>Arttır</button>
      <button onClick={() => dispatch(DECREMENT)}>Azalt</button>
      <button onClick={() => dispatch(RESET)}>Resetle</button>
      <button onClick={() => dispatch("OLMAYAN")}>Olmayan</button>
    </div>
  );
}
