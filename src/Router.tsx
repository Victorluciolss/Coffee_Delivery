import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Checkout } from './pages/Checkout'
import { DefaultLayout } from './layouts/DefaultLayout'
import { CheckoutSuccess } from './pages/CheckoutSuccess'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkoutsuccess" element={<CheckoutSuccess />} />
      </Route>
    </Routes>
  )
}
