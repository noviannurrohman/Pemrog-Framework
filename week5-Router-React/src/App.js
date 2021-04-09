import React, { Component } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import TypoGraphy from "@material-ui/core/Typography";
import "./App.css";
import { Grid } from "@material-ui/core";
import randomColor from "randomcolor";
import { Navbar, Nav } from "react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  // useParams,
  // useRouteMatch,
  Redirect,
  useHistory,
  useLocation
}from "react-router-dom";

// export default function BasicExample(){
//   return(
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/dashboard">Dashboard</Link>
//           </li>
//         </ul>
//         <hr />

//         <Switch>
//           <Route exact path="/">
//             <Home />
//           </Route>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/dashboard">
//             <Dashboard />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function Home(){
//   return(
//       <div>
//         <h2>Home</h2>
//       </div>
//   );
// }

// function About(){
//   return(
//       <div>
//         <h2>About</h2>
//       </div>
//   );
// }

// function Dashboard(){
//   return(
//       <div>
//         <h2>Dashboard</h2>
//       </div>
//   );
// }

// export default function ParamsExample(){
//   return(
//     <Router>
//       <div>
//         <h2>Accounts</h2>
//         <ul>
//           <li>
//             <Link to="/netflix">Netflix</Link>
//           </li>
//           <li>
//             <Link to="/gmail">Gmail</Link>
//           </li>
//           <li>
//             <Link to="/yahoo">Yahoo</Link>
//           </li>
//           <li>
//             <Link to="/amazon">Amazon</Link>
//           </li>
//         </ul>
        

//         <Switch>
//           <Route path="/:id" children={<Child />}/>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function Child(){
//   let { id } = useParams();

//   return(
//     <div>
//       <h3>ID: {id}</h3>
//     </div>
//   );
// }

// export default function NestingExample(){
//   return(
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/topics">Topics</Link>
//           </li>
//         </ul>
//         <hr />
        

//         <Switch>
//           <Route exact path="/" >
//             <Home />
//           </Route>
//           <Route path="/topics" >
//             <Topics/>
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function Home(){
//   return(
//     <div>
//       <h2>Home</h2>
//     </div>
//   );
// }

// function Topics(){
//   let { path, url } = useRouteMatch();
//   return(
//     <div>
//       <h2>Topics</h2>
//       <ul>
//         <li>
//           <Link to={`${url}/Sate, Nasi goreng`}>Kuliner</Link>
//         </li>
//          <li>
//           <Link to={`${url}/Wisata alam, Museum`}>Travelling</Link>
//         </li>
//          <li>
//           <Link to={`${url}/Ibis, JW Marriot`}>Review Hotel</Link>
//         </li>
//       </ul>

//       <Switch>
//         <Route exact path={path}>
//           <h3>Please select a topic.</h3>
//         </Route>
//         <Route path={`${path}/:topicId`}>
//           <Topic />
//         </Route>
//       </Switch>
//     </div>
//   );
// }

// function Topic(){
//   let { topicId } = useParams();

//   return(
//     <div>
//       <h3>{topicId}</h3>
//     </div>
//   );
// }

// export default function AuthExample() {
//   return(
//     <Router>
//       <div>
//         <AuthButton />

//         <ul>
//           <li>
//             <Link to="/public">Public Page</Link>
//           </li>
//           <li>
//             <Link to="/private">Private Page</Link>
//           </li>
//         </ul>

//         <Switch>
//           <Route path="/public">
//             <PublicPage />
//           </Route>
//           <Route path="/login" >
//             <LoginPage  />
//           </Route>
//           <PrivateRoute path="/private">
//             <ProtectedPage />
//           </PrivateRoute>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// const fakeAuth = {
//   isAuthenticated:false,
//   authenticate(cb){
//     fakeAuth.isAuthenticated = true;
//     setTimeout(cb, 100);
//   },
//   signout(cb){
//     fakeAuth.isAuthenticated = false;
//     setTimeout(cb, 100);
//   }
// };

// function AuthButton(){
//   let history = useHistory();

//   return fakeAuth.isAuthenticated ? (
//     <p>
//       Welcome!{" "}
//       <button
//         onClick={() => {
//           fakeAuth.signout(() => history.push("/"));
//         }}
//       >
//         Sign out
//       </button>
//     </p>
//   ) : (
//     <p>You are not logged in.</p>
//   );
// }

// // Pembungkus untuk <Route> yang mengarahkan ke login
// // Tampilan jika Anda belum terkonfirmasi

// function PrivateRoute({ children, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         fakeAuth.isAuthenticated ? (
//           children
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/login",
//               state: { from: location }
//             }}
//           />
//         )
//       }
//     />
//   );
// }

// function PublicPage(){
//   return <h3>Public </h3>;
// }

// function ProtectedPage(){
//   return <h3>Private</h3>;
// }

// function LoginPage(){
//   let history = useHistory();
//   let location = useLocation();

//   let { from } = location.state || { from: { pathname: "/"} };
//   let login = () => {
//     fakeAuth.authenticate(() => {
//       history.replace(from);
//     });
//   };

//   return(
//     <div>
//       <p>You must log in to view the page at {from.pathname}</p>
//       <button onClick={login}>Log in</button>
//     </div>
//   );
// }


class App extends Component {
  render() {
    return (
      <Router>
        <div class="container-fluid bg-dark">
          <div className="row">
            <div className="col-md-12">
              <Navbar bg="success" variant="dark" expand="lg" sticky="top">
                <Navbar.Brand href="#home">Kentang Store</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav.Link href="#"></Nav.Link>
                  <Nav>
                    <Link to="/">Home</Link>
                  </Nav>
                  <Nav.Link href="#"></Nav.Link>
                  <Nav>
                    <Link to="/private">Category</Link>
                  </Nav>

                  <Nav.Link href="#"></Nav.Link>
                </Navbar.Collapse>
              </Navbar>
              <br />
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 bg-info">
              <div class="text-center">
                <h2>Welcome to My Store</h2>
              </div>
            </div>
          </div>

          <Switch>
            <Route exact path="/">
              <div className="row">
                <div className="col-md-12 bg-info">
                  <br />
                  <AuthButton />
                  <Start />
                </div>
              </div>
            </Route>
            <Route path="/home">
              <div className="row">
                <div className="col-md-12 bg-info">
                  <br />
                  <AuthButton />
                  <Home />
                </div>
              </div>
            </Route>
            <Route path="/clothing">
              <div className="row">
                <div className="col-md-12 bg-info">
                  <br />
                  <AuthButton />
                  <Clothing />
                </div>
              </div>
            </Route>
            <Route path="/acc">
              <div className="row">
                <div className="col-md-12 bg-info">
                  <br />
                  <AuthButton />
                  <Acc />
                </div>
              </div>
            </Route>
            <Route path="/login">
              <div className="row">
                <div className="col-md-12 bg-info">
                  <br />
                  <LoginPage />
                </div>
              </div>
            </Route>
            <PrivateRoute path="/private">
              <div className="row">
                <div className="col-md-12 bg-info">
                  <br />
                  <AuthButton />
                  <ProtectedPage />
                </div>
              </div>
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    );

    function PrivateRoute({ children, ...rest }) {
      return (
        <Route
          {...rest}
          render={({ location }) =>
            fakeAuth.isAuthenticated ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: location },
                }}
              />
            )
          }
        />
      );
    }

    function LoginPage() {
      let history = useHistory();
      let location = useLocation();

      let { from } = location.state || { from: { pathname: "/" } };
      let login = () => {
        fakeAuth.authenticate(() => {
          history.replace(from);
        });
      };

      return (
        <div>
          <p>You must log in to view the Category </p>
          <button onClick={login}>Log in</button>
          <br></br>
          <br></br>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <div style={{ background: randomColor() }}>
                <img
                  src="https://freepngimg.com/thumb/shoes/28530-3-nike-shoes-transparent.png"
                  alt="laptop"
                  width="300"
                />
                <h2> Nike Shoes</h2>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div style={{ background: randomColor() }}>
                <img
                  src="https://i2.wp.com/freepngimages.com/wp-content/uploads/2015/11/green-tarten-pleated-mini-skirt.png?w=367"
                  alt="laptop"
                  width="385"
                />
                <h2> Plaid Skirt</h2>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div style={{ background: randomColor() }}>
                {" "}
                <img
                  src="http://www.pngmart.com/files/7/Khaki-Pant-PNG-Transparent-Image.png"
                  alt="laptop"
                  width="250"
                />
                <h2>Long Trousers</h2>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div style={{ background: randomColor() }}>
                <img
                  src="https://www.pngkey.com/png/full/274-2743468_share-this-image-gucci-original-gg-canvas-backpack.png"
                  alt="laptop"
                  width="200"
                />
                <h2>Medium Bag</h2>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div style={{ background: randomColor() }}>
                <img
                  src="https://freepngimg.com/thumb/dress_shirt/7-2-dress-shirt-png-hd.png"
                  alt="laptop"
                  width="287"
                />
                <h2>Long Sleeve Shirt</h2>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div style={{ background: randomColor() }}>
                <img
                  src="https://pngimg.com/uploads/belt/belt_PNG9591.png"
                  alt="laptop"
                  width="430"
                />
                <h2>Leather Belt</h2>
              </div>
            </Grid>
          </Grid>
        </div>
      );
    }

    function ProtectedPage() {
      return (
        <div>
          <div className="row">
            <div className="col-md-12">
              <Navbar bg="danger" variant="dark" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="#"></Nav.Link>
                    <Link to="/home">Home</Link>
                    <Nav.Link href="#"></Nav.Link>
                    <Link to="/clothing">Clothing</Link>
                    <Nav.Link href="#"></Nav.Link>
                    <Link to="/acc">Accessories</Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
          </div>
          <br></br>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <div style={{ background: randomColor() }}>
                <img
                  src="https://freepngimg.com/thumb/shoes/28530-3-nike-shoes-transparent.png"
                  alt="laptop"
                  width="300"
                />
                <h2> Nike Shoes</h2>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div style={{ background: randomColor() }}>
                <img
                  src="https://i2.wp.com/freepngimages.com/wp-content/uploads/2015/11/green-tarten-pleated-mini-skirt.png?w=367"
                  alt="laptop"
                  width="385"
                />
                <h2> Plaid Skirt</h2>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div style={{ background: randomColor() }}>
                {" "}
                <img
                  src="http://www.pngmart.com/files/7/Khaki-Pant-PNG-Transparent-Image.png"
                  alt="laptop"
                  width="250"
                />
                <h2>Long Trousers</h2>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div style={{ background: randomColor() }}>
                <img
                  src="https://www.pngkey.com/png/full/274-2743468_share-this-image-gucci-original-gg-canvas-backpack.png"
                  alt="laptop"
                  width="200"
                />
                <h2>Medium Bag</h2>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div style={{ background: randomColor() }}>
                <img
                  src="https://freepngimg.com/thumb/dress_shirt/7-2-dress-shirt-png-hd.png"
                  alt="laptop"
                  width="287"
                />
                <h2>Long Sleeve Shirt</h2>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div style={{ background: randomColor() }}>
                <img
                  src="https://pngimg.com/uploads/belt/belt_PNG9591.png"
                  alt="laptop"
                  width="430"
                />
                <h2>Leather Belt</h2>
              </div>
            </Grid>
          </Grid>
        </div>
      );
    }

    function Start() {
      return (
        <div>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <div style={{ background: randomColor() }}>
                <img
                  src="https://freepngimg.com/thumb/shoes/28530-3-nike-shoes-transparent.png"
                  alt="laptop"
                  width="300"
                />
                <h2> Nike Shoes</h2>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div style={{ background: randomColor() }}>
                <img
                  src="https://i2.wp.com/freepngimages.com/wp-content/uploads/2015/11/green-tarten-pleated-mini-skirt.png?w=367"
                  alt="laptop"
                  width="385"
                />
                <h2> Plaid Skirt</h2>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div style={{ background: randomColor() }}>
                <img
                  src="http://www.pngmart.com/files/7/Khaki-Pant-PNG-Transparent-Image.png"
                  alt="laptop"
                  width="250"
                />
                <h2>Long Trousers</h2>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div style={{ background: randomColor() }}>
                <img
                  src="https://www.pngkey.com/png/full/274-2743468_share-this-image-gucci-original-gg-canvas-backpack.png"
                  alt="laptop"
                  width="200"
                />
                <h2>Medium Bag</h2>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div style={{ background: randomColor() }}>
                <img
                  src="https://freepngimg.com/thumb/dress_shirt/7-2-dress-shirt-png-hd.png"
                  alt="laptop"
                  width="287"
                />
                <h2>Long Sleeve Shirt</h2>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div style={{ background: randomColor() }}>
                <img
                  src="https://pngimg.com/uploads/belt/belt_PNG9591.png"
                  alt="laptop"
                  width="430"
                />
                <h2>Leather Belt</h2>
              </div>
            </Grid>
          </Grid>
        </div>
      );
    }

    function Home() {
      return (
        <div>
          <div className="row">
            <div className="col-md-12">
              <Navbar bg="danger" variant="dark" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="#"></Nav.Link>
                    <Link to="/home">Home</Link>
                    <Nav.Link href="#"></Nav.Link>
                    <Link to="/clothing">Clothing</Link>
                    <Nav.Link href="#"></Nav.Link>
                    <Link to="/acc">Accessories</Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
          </div>
          <br></br>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <div style={{ background: randomColor() }}>
                <img
                  src="https://freepngimg.com/thumb/shoes/28530-3-nike-shoes-transparent.png"
                  alt="laptop"
                  width="300"
                />
                <h2> Nike Shoes</h2>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div style={{ background: randomColor() }}>
                <img
                  src="https://i2.wp.com/freepngimages.com/wp-content/uploads/2015/11/green-tarten-pleated-mini-skirt.png?w=367"
                  alt="laptop"
                  width="385"
                />
                <h2> Plaid Skirt</h2>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div style={{ background: randomColor() }}>
                {" "}
                <img
                  src="http://www.pngmart.com/files/7/Khaki-Pant-PNG-Transparent-Image.png"
                  alt="laptop"
                  width="250"
                />
                <h2>Long Trousers</h2>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div style={{ background: randomColor() }}>
                <img
                  src="https://www.pngkey.com/png/full/274-2743468_share-this-image-gucci-original-gg-canvas-backpack.png"
                  alt="laptop"
                  width="200"
                />
                <h2>Medium Bag</h2>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div style={{ background: randomColor() }}>
                <img
                  src="https://freepngimg.com/thumb/dress_shirt/7-2-dress-shirt-png-hd.png"
                  alt="laptop"
                  width="287"
                />
                <h2>Long Sleeve Shirt</h2>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div style={{ background: randomColor() }}>
                <img
                  src="https://pngimg.com/uploads/belt/belt_PNG9591.png"
                  alt="laptop"
                  width="430"
                />
                <h2>Leather Belt</h2>
              </div>
            </Grid>
          </Grid>
        </div>
      );
    }

    function Clothing() {
      return (
        <div>
          <div className="row">
            <div className="col-md-12">
              <Navbar bg="danger" variant="dark" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="#"></Nav.Link>
                    <Link to="/home">Home</Link>
                    <Nav.Link href="#"></Nav.Link>
                    <Link to="/clothing">Clothing</Link>
                    <Nav.Link href="#"></Nav.Link>
                    <Link to="/acc">Accessories</Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
          </div>
          <br></br>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <div style={{ background: randomColor() }}>
                <img
                  src="https://i2.wp.com/freepngimages.com/wp-content/uploads/2015/11/green-tarten-pleated-mini-skirt.png?w=367"
                  alt="laptop"
                  width="385"
                />
                <h2> Plaid Skirt</h2>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div style={{ background: randomColor() }}>
                <img
                  src="http://www.pngmart.com/files/7/Khaki-Pant-PNG-Transparent-Image.png"
                  alt="laptop"
                  width="250"
                />
                <h2>Long Trousers</h2>
              </div>
            </Grid>

            <Grid item xs={4}>
              <div style={{ background: randomColor() }}>
                <img
                  src="https://freepngimg.com/thumb/dress_shirt/7-2-dress-shirt-png-hd.png"
                  alt="laptop"
                  width="312"
                />
                <h2>Long Sleeve Shirt</h2>
              </div>
            </Grid>
          </Grid>
        </div>
      );
    }

    function Acc() {
      return (
        <div>
          <div className="row">
            <div className="col-md-12">
              <Navbar bg="danger" variant="dark" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="#"></Nav.Link>
                    <Link to="/home">Home</Link>
                    <Nav.Link href="#"></Nav.Link>
                    <Link to="/clothing">Clothing</Link>
                    <Nav.Link href="#"></Nav.Link>
                    <Link to="/acc">Accessories</Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
          </div>
          <br></br>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <div style={{ background: randomColor() }}>
                <img
                  src="https://freepngimg.com/thumb/shoes/28530-3-nike-shoes-transparent.png"
                  alt="laptop"
                  width="300"
                />
                <h2> Nike Shoes</h2>
              </div>
            </Grid>

            <Grid item xs={4}>
              <div style={{ background: randomColor() }}>
                <img
                  src="https://www.pngkey.com/png/full/274-2743468_share-this-image-gucci-original-gg-canvas-backpack.png"
                  alt="laptop"
                  width="218"
                />
                <h2>Medium Bag</h2>
              </div>
            </Grid>

            <Grid item xs={4}>
              <div style={{ background: randomColor() }}>
                <img
                  src="https://pngimg.com/uploads/belt/belt_PNG9591.png"
                  alt="laptop"
                  width="469"
                />
                <h2>Leather Belt</h2>
              </div>
            </Grid>
          </Grid>
        </div>
      );
    }

    function AuthButton() {
      let history = useHistory();

      return fakeAuth.isAuthenticated ? (
        <p>
          Welcome!{" "}
          <button
            onClick={() => {
              fakeAuth.signout(() => history.push("/"));
            }}
          >
            Sign Out
          </button>
        </p>
      ) : (
        <p>You are not logged in</p>
      );
    }
  }
}
const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};
export default App;