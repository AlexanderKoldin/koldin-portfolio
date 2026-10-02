import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Stack from './components/Stack';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Spotlight from './components/Spotlight';

export default function App() {
  return (
    <>
      <Spotlight />
      <Header />
      <main>
        <Hero />
        <About />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
