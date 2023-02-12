import React, { useEffect } from "react";
import Router from "./Router";
import { AuthProvider } from "./Utils/AuthContext";
export default function App() {

  return(
      <AuthProvider>
        <Router/>
      </AuthProvider>
  )
}
