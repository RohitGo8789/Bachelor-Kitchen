// Cart.jsx
import React, { useContext, useState } from 'react';
import './Cart.css';
import { StoreContext } from '../../components/context/StoreContext';
import { useNavigate } from 'react-router-dom';

const deliveryWindows = {
  Breakfast: ['7:00 AM - 9:00 AM', '9:00 AM - 12:00 PM'],
  Lunch: ['12:00 PM - 3:00 PM', '3:00 PM - 5:00 PM'],
  Dinner: ['8:00 PM - 10:00 PM'],
  Snacks: ['5:00 PM - 6:00 PM', '6:00 PM - 8:00 PM'],
  default: ['6:00 AM - 8:00 PM']
};

const getValidSlots = (slots) => {
  const now = new Date();

  return slots.filter(slot => {
    const endTimeStr = slot.split(' - ')[1];
    const [time, modifier] = endTimeStr.split(' ');
    let [hours, minutes] = time.split(':').map(Number);

    if (modifier === 'PM' && hours !== 12) hours += 12;
    if (modifier === 'AM' && hours === 12) hours = 0;

    const endTime = new Date();
    endTime.setHours(hours, minutes, 0, 0);

    return now < endTime;
  });
};

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext);
  const navigate = useNavigate();

  const [deliverySlotsPerItem, setDeliverySlotsPerItem] = useState({});

  const handleTimeSlotChange = (itemId, value) => {
    setDeliverySlotsPerItem(prev => ({
      ...prev,
      [itemId]: value
    }));
  };

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            const rawSlots = deliveryWindows[item.category] || deliveryWindows.default;
            const itemSlots = getValidSlots(rawSlots);

            return (
              <div key={item._id} className="cart-item-block">
                <div className="cart-items-title cart-items-item">
                  <img src={url + '/images/' + item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>Rs {item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>Rs {item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className='cross'>x</p>
                </div>

                <div className="delivery-slot">
                  <p>
                    Select delivery time for <strong>{item.name}</strong>:
                  </p>
                  <select
                    value={deliverySlotsPerItem[item._id] || ''}
                    onChange={(e) => handleTimeSlotChange(item._id, e.target.value)}
                  >
                    <option value="">-- Select a time slot --</option>
                    {itemSlots.length > 0 ? (
                      itemSlots.map((slot, idx) => (
                        <option key={idx} value={slot}>{slot}</option>
                      ))
                    ) : (
                      <option value="" disabled>No available slots</option>
                    )}
                  </select>
                </div>

                <hr />
              </div>
            );
          }
          return null;
        })}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-detail">
              <p>Subtotal</p>
              <p>Rs {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-detail">
              <p>Delivery Fee</p>
              <p>Rs {getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-detail">
              <b>Total</b>
              <b>Rs {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
            </div>
          </div>

          <button
            onClick={() => {
              const missingSlots = food_list.filter(item =>
                cartItems[item._id] > 0 && !deliverySlotsPerItem[item._id]
              );
              if (missingSlots.length > 0) {
                alert(`Please select delivery time for: ${missingSlots.map(i => i.name).join(', ')}`);
                return;
              }

              navigate('/order', { state: { deliverySlotsPerItem } });
            }}
          >
            PROCEED TO CHECKOUT
          </button>
        </div>

        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, enter it here</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder='Promo Code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
