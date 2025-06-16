import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Modal from "../components/Modal";
// import Modal from "../components/Modal";
// import { useEffect } from "react";
// import { useAppStore } from "../../store/useAppStore";
// import Notification from "../components/Notification";

export default function Layout() {
  // const loadFavoritesFromStorage = useAppStore((state) => state.loadFromStorage);

  // useEffect(() => {
  //   loadFavoritesFromStorage();
  // }, [])

  return (
    <>
        <Header />
        
        <main className="container mx-auto py-16">
            <Outlet />
        </main>

        <Modal />
        {/* <Notification/> */}
    </>
  )
}
