import React from "react";
import logo from "./logo.svg";
import "./App.css";
import DateChanger from "./DateChanger";
import DateRendering from "./DateRendering";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Navigation from "./components/Nav";
import "bootstrap/dist/css/bootstrap.min.css";

interface DateContextType {
  date: Date | null;
  setDate: React.Dispatch<React.SetStateAction<Date | null>>;
}

export const DateContext = React.createContext<DateContextType>({
  date: null,
  setDate: () => {},
});

function App() {
  const [date, setDate] = React.useState<Date | null>(null);

  const dateContextValue = { date, setDate };
  return (
    <div className="App">
      <Navigation />
      <DateContext.Provider value={dateContextValue}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:userId" element={<Post />} />
        </Routes>
      </DateContext.Provider>
    </div>
  );
}

export default App;
