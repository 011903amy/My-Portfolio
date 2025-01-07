import { imgPath } from '@/components/helpers/functions-general';
import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className="bg-secondary">
        <div className="container ">
          <div className="flex justify-between p-5 ">
            <img src={`${imgPath}/logo(1).png`} alt="" />
            <ul className="flex gap-10 items-center text-white">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/skills">Skills</Link>
              </li>
              <li>
                <Link to="/contacts">Contacts</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header