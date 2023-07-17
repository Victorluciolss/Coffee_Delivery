import { HeaderContainer } from './styles'
import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={logo} alt="" />
      </NavLink>

      <nav>
        <div>
          <MapPin size={22} color="#8047f8" weight="fill" />
          <span>Araguri, MG</span>
        </div>
        <label>
          <NavLink to="/checkout" title="checkout">
            <ShoppingCart size={22} color="#C47F17" weight="fill" />
          </NavLink>
        </label>
      </nav>
    </HeaderContainer>
  )
}
