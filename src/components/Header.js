import React from 'react'
import {AiFillHome} from "react-icons/ai"
import MenuItem from './MenuItem'
const Header = () => {
  return (
    <div>
      <div className="">
        <MenuItem title="Home" Icon={AiFillHome} address="/"></MenuItem>
      </div>
      <div className=""></div>
    </div>
  )
}

export default Header
