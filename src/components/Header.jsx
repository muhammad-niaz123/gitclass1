import React from 'react'

import { Link } from 'react-router-dom';

const Header = () => {
  return (<>
   <Link  className='header'   to={"/login"   }  >  Login    </Link>
   <Link     to={"/signup"   }  >  Signup   </Link>
   
   </>

  )
}

export default Header