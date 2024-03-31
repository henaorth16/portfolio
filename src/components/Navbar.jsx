
import profile from '../assets/profile.png';
import About from '../components/About'

const Navbar = () => {
  return (
    <div>
      <nav className='flex items-center justify-center gap-8 pt-3'>
        <img className='h-12' src={profile} alt="React Logo" />
        <ul className='flex justify-center p-4 bg-slate-700 text-white rounded-full gap-7'>
          <li><a href="/">Home</a></li>
          <li><a onClick='/About'>About</a></li>
          <li><a href="/">Works</a></li>
          <li><a href="/">Certifications</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
