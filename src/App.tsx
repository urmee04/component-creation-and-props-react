import { useState } from "react";
import "./App.css";
import { AlertBox } from "./components/AlertBox/AlertBox";
import type { User } from "../src/types";
import { UserProfileCard } from "./components/UserProfileCard/UserProfileCard";
import { ProductDisplay } from "./components/ProductDisplay/ProductDisplay";
import headphoneImg from "../src/images/wireless-headphone.png";

function App() {
  //useState hook to control visibility of the alert
  const [showAlert, setShowAlert] = useState(true);

  //sample user data to pass to UserProfileCard
  const user: User = {
    id: "1",
    name: "Romana Akter",
    email: "urmee04sust@gmail.com",
    role: "Software Engineer",
    avatarUrl: "https://avatar.iran.liara.run/username?username=RA",
  };
  //sample data to pass to ProductDispaly
  const product = {
    id: "1",
    name: "Wireless Headphones",
    price: 199.99,
    description: "High-quality wireless headphones with noise cancellation.",
    imageUrl: headphoneImg,
    inStock: true,
  };

  return (
    <>
      {/* AlertBox Component */}
      {showAlert && (
        <AlertBox
          type="success"
          message="Your profile has been updated successfully!"
          onClose={() => setShowAlert(false)}
        >
          <p className="text-sm">You can now continue using the application.</p>
        </AlertBox>
      )}
      {/* UserProfileCard Component */}
      <UserProfileCard
        user={user}
        showEmail={true}
        showRole={true}
        onEdit={(userId) => alert(`Editing user ${userId}`)}
      >
        <div className="text-sm text-gray-500">Last login: 2 hours ago</div>
      </UserProfileCard>
      {/* ProductDisplay Component */}
      <ProductDisplay
        product={product}
        showDescription={true}
        showStockStatus={true}
        onAddToCart={(productId) => alert(`Added product ${productId} to cart`)}
      >
        <div className="text-sm text-gray-500">Free shipping available</div>
      </ProductDisplay>
    </>
  );
}

export default App;
