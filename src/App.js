import { getDatabase, ref, set } from "firebase/database";
import { app } from "./firebase";

const db = getDatabase(app);

function App() {
  const putData = () => {
    set(ref(db, "users/faiz"), {
      id: 1,
      name: "Faiz Ansari update",
      age: 29,
    });
  };

  return (
    <div className="App">
      <h2>Welcome to firebase-auth-app</h2>
      <button onClick={putData}>Put data</button>
    </div>
  );
}

export default App;
