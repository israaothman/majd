
import Header from './header.js';
import './style/sign.scss';
import Signup from './signup';
import Footer from './footer';
function Home() {
  return (
    <>
      <Header />
      <div className="register">
      <Signup/>
      </div>
      <Footer/>

    </>
  );
}

export default Home;
