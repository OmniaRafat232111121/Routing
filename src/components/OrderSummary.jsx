import {useNavigate} from 'react-router-dom'
const OrderSummary = () => {
  const navigate=useNavigate()
  return (
    <div>
      <h1>Order Confirmed</h1>
      <bitton onClick={()=>navigate(-1)}>Go back</bitton>
    </div>
  )
}

export default OrderSummary
