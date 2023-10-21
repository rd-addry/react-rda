# TUTORIAL 

Tutorial can be watch in : 
https://www.youtube.com/watch?v=ojN1luteH-Q&t=1548s
https://www.youtube.com/watch?v=TWz4TjSssbg&t=519s

# STEP BY STEP

1. Create a folder
2. Open the VS Code
3. Open created folder on VS Code
4. Run new Terminal

## Create a new React App
5. Create apps template by writing npx create-react-app File Name on designated folder
6. Once created, the new folder will be created on the INSIDE of designated folder

## Organizing React Template files 
7. Delete these files :
    - Everything in ./public folder EXCEPT index.HTML
    - Everything in ./src folder EXCEPT App.js and Index.js
8. On index.html
    - Delete comments
    - Change title
9. On Index.js
    - Delete comments
    - Delete reportWebVitals();
    - Delete import reportWebVitals from './reportWebVitals';
    - Delete import './index.css';
10. On App.js
    - Delete import logo from './logo.svg';
    - Delete import './App.css';
    - Delete contents 

        <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
            className="App-link"
             href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
              Learn React
            </a>
         </header>
     </div>


## Working on App.js
11. Rewrite formula 

        export default function App() {
  return (
    <div>
        <h1>Hello</h1>
    </div>
  );
  }

  To test the app
12. Activate npm by opening Terminal and write npm start
13. Window on browser will open with directory of "http://localhost:3000" by default
14. "Hello World" will be printed on a new tab of your browser.

## Activating CSS Styling
15. On ./src folder, create a styles folder
16. Inside the folder, create a new CSS files, name it by main.css
17. Try the main.css file by styling it, follow the instruction below.
18. Open main.css file
19. Create a simple styling,for ex:
    
    h1 {
    color: red;
    text-align: center; 
    }

    Save your file
20. Open App.js
21. Ontop of the editor import our styling by writing :

    import './styles/main.css'

22. Open your browser preview, the updated style is displayed and your CSS is active.

## Set up Router
23. Open Terminal
24. Write npm install-react-router-dom
 or `npm install --save react-router-dom`
25. Router is installed and active. 
    Note that will be expected several errors shows in the Terminal. Ignore them.

## Creating pages files
26. On ./src folder, create a pages folder
27. Create several pages such as:
    - Home.js
    - About.js
    - Works.js
    Note that always make Capital name of files to differ JavaScript files with HTML & CSS files

## Creating a Component
28. On ./src folder, create a component folder
29. Create a file inside the folder to test, ex: Header.js
30. Write a function to format the Header, ex:

```
    export default function Header() {
    return (
        <h1>H1 Header</h1>
    )
    }
```

## Importing Header to the Pages
31. Open the Home.js file
32. Write :

    import Header from '../components/Header'

33. Copy the text and paste it on About and Works pages
34. Go back to Home.js
35. Export the Header by writing :

    export default function Home() {
    return (
        <>
            <Header />
            <h2>H2 Home Page</h2>
        </>
    )
}
36. Go to About page and copy the export with changes on it's properties

    export default function About() {
    return (
        <>
            <Header />
            <h2>H2 About Page</h2>
        </>
    )
}

37. Go to Works page and copy the export with changes on it's properties

export default function Works() {
    return (
        <>
            <Header />
            <h2>H2 Works Page</h2>
        </>
    )
}

## Importing Router
38. Go to App.js
39. On top of the editor, import the BrowserRouter by writing :

    import { BroeserRouter, Routes, Route } from 'react-router-dom'

40. Import created pages by writing :

    import Home from './pages/Home'
    import About from './pages/About'
    import Works from './pages/Works'

41. Activate by exporting the BrowserRouter by editing the export function to :

    export default function App() {
  return (
    <div>
      <BroeserRouter>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BroeserRouter>
    </div>
  );
}

## Adding Directory in Web Address
42. Continue the development by adding path into the function 

        export default function App() {
    return (
        <div>
        <BrowserRouter>
            <Routes>
            <Route index element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/works' element={<Works />} />
            </Routes>
        </BrowserRouter>
     </div>
    );
    }

43. Each path directing to each specific page created, with updated Header on each page

## Create 404 : NOT FOUND PAGE
44. On ./pages folder, create a new NoPage.js file
45. Write:

        import Header from '../components/Header'

        export default function NoPage() {
            return (
                <>
                    <Header />
                    <h2>H2 Error 404: Page Not Found</h2>
                </>
            )
        }

    Note that the contents of the page is similar to any other pages
46. Go to App.js and add :
    - import the No Page : import NoPage from './pages/NoPage'
    - Adding route path : <Route path='*' element={<NoPage />} />

=== 

Additional Notes for App.js

  ```
  <Route
            path="/"
            element={<MainLayout />}
          >
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<Works />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
  ```


  ```
  <Routes>
  <Route path="/" element={<MainLayout />,} />
  <Route index element={<Home />} />
  <Route path="/home" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/works" element={<Works />} />
  <Route path="*" element={<NoPage />} />
</Routes>
```