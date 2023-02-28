import { Outlet } from "react-router-dom";
import Navbar from "../global/Navbar";
import Footer from "../global/Footer/Footer";

function RootLayout() {
  return (
    <main>
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}

export default RootLayout;
