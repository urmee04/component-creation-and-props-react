import { useState } from "react";
import "./App.css";
import { AlertBox } from "./components/AlertBox/AlertBox";

function App() {
  //useState hook to control visibility of the alert
  const [showAlert, setShowAlert] = useState(true);

  return (
    <>
      {/* conditionally render the AlertBox when showAlert is true */}
      {showAlert && (
        <AlertBox
          type="success" //set the alert type (color and icon style)
          message="Your profile has been updated successfully!" // Main message
          onClose={() => setShowAlert(false)} //hide the alert when close is clicked
        >
          {/* optional child content inside the alert */}
          <p className="text-sm">You can now continue using the application.</p>
        </AlertBox>
      )}
    </>
  );
}

export default App;
