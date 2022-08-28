import Navbar from "./Component/Navbar";
import { auth } from "./firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import Chat from "./Component/Chat";

const style = {
  appContainer: `max-width-[728px] mx-auto text-center`,
  appSection: `flex flex-col h-[90vh] bg-grey mt-10 shadow-xl border relative`
}

function App() {
  const [user] = useAuthState(auth)
  // console.log(user);
  return (
    <div className={style.appContainer}>
      <section className={style.appSection}>
        <Navbar />
        {
          user?<Chat/> :null
        }
        {/* <Chat /> */}
      </section>
    </div>
  );
}

export default App;
