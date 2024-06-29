import React, { createContext, useState, useContext } from "react";

// Create the context
const SidebarContext = createContext();

// Create a custom hook to use the SidebarContext
export const useSidebar = () => {
  return useContext(SidebarContext);
};

// Create the provider component
export const SidebarProvider = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const openSidebar = () => setIsSideBarOpen(true);
  const closeSidebar = () => setIsSideBarOpen(false);

  return (
    <SidebarContext.Provider
      value={{ isSideBarOpen, openSidebar, closeSidebar }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
