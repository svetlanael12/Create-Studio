import { BrowserRouter } from 'react-router-dom';
import AppRouter from "./routes/AppRouter";
import { useEffect, useState } from 'react';


function App() {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  // const handleUpButton = () => {
  //   window.scrollTo(0, 0);
  // };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <BrowserRouter>
      <AppRouter scroll={scroll}/>
    </BrowserRouter>
  );
}

export default App;