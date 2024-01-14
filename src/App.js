import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesComponent  from "./route";
import { AuthProvider } from "./config/AuthContext";

function App() {
  
  return (
    <Router >
      <div>
        <AuthProvider>
          <RoutesComponent  />
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;
