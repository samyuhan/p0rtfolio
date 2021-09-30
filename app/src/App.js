import React, { useState } from "react";
import Homepage from "./components/Homepage";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import About from "./components/About";
import Visual from "./components/Visual";
// import Portfolio from "./components/Portfolio";
// import Resume from "./components/Resume";

function App() {
  const [currentPage, setCurrentPage] = useState('');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About Me') {
      return <About />;
    }
    // if (currentPage === 'Portfolio') {
    //   return <Portfolio />;
    // }
    // if (currentPage === 'Resume') {
    //   return <Resume />;
    // }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  // return (
  //   <div>
  //     <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
  //     <Header />
  //     {renderPage()}
  //     <Footer />
  //   </div>
  // );

  return (
    <div>
      <div>
        {currentPage !== 'About Me' ? (
          <Homepage currentPage={currentPage} handlePageChange={handlePageChange}/>
        ) : (
          <>
            <Nav />
            <Visual />
            <Footer />
          </>
        )}
      </div>
    </div>
  );
}

export default App;