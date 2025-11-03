import UserContextProvider from "./context/userContextProvider";
import { Login, Profile } from "./components/index.js";

function App() {
  return (
    <UserContextProvider>
      <div className="min-h-screen bg-slate-50 flex items-center py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <header className="mb-8 text-center">
            <h1 className="text-4xl font-extrabold text-slate-900">Context API Demo</h1>
        
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Login />
            <Profile />
          </div>
        </div>
      </div>
    </UserContextProvider>
  );
}

export default App;
