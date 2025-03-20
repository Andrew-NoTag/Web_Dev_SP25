# Midterm Progress Report

## A snippet of code I figured out

How to use React router to direct to direct to different page.
The reference I used is [this link](https://www.w3schools.com/react/react_router.asp).
```js
import React from "react";
import NavBar from "./components/NavBar.js";
import Homepage from "./components/Homepage.js";
import Footer from "./components/Footer.js";
import MenuPage from "./components/MenuPage.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* NavBar at top of the page */}
        <NavBar />

        {/* Routes to different contents */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/menu" element={<MenuPage />} />
        </Routes>

        {/* Footer at bottom of the page */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
```

## Next Steps

- Finish shopping cart feature
  - functionality (i.e. add items, delete items, check out, send email to me)
  - css
- redesign some elements (navigation bar etc.)
- ensure every button works
- animation (i.e. menu card flip)
- update contents (i.e. dishes name and descriptions)
- deploy on Github Pages

