import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';

const Orders = () => {

    const getOrders = async () => {
        const res = await axios.get("/orders/get", {
            headers: {
                Authorization: `Bearer + ${import.meta.env.}`
            }
        })
    }

  return (
    <div>Orders</div>
  )
}

export default Orders