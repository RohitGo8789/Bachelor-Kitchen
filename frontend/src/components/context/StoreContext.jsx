import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const url = "http://localhost:4000";
  const [token, setToken] = useState("");

  const [food_list, setFoodList] = useState([]);

  // const addToCart = async (itemId) => {
  //     if (!cartItems[itemId]) {
  //         setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
  //     } else {
  //         setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
  //     }
  //     if(token){
  //         await axios.post(url+'/api/cart/add',{itemId},{headers:{token}})
  //     }
  // }

  const parseTimeTo24Hour = (timeStr) => {
    const [time, modifier] = timeStr.toLowerCase().split(" ");
    let [hours, minutes] = time.split(":").map(Number);

    if (modifier === "pm" && hours !== 12) hours += 12;
    if (modifier === "am" && hours === 12) hours = 0;

    return { hours, minutes };
  };

  const isCurrentTimeInRange = (startStr, endStr) => {
    const now = new Date();
    const nowMinutes = now.getHours() * 60 + now.getMinutes();

    const start = parseTimeTo24Hour(startStr);
    const end = parseTimeTo24Hour(endStr);

    const startMinutes = start.hours * 60 + start.minutes;
    const endMinutes = end.hours * 60 + end.minutes;

    return nowMinutes >= startMinutes && nowMinutes < endMinutes;
  };

  const addToCart = async (itemId) => {
    const item = food_list.find((i) => i._id === itemId);
    if (!item) {
       toast.error("Item not found.");
      return;
    }

    const category = item.category;
    const categoryTimeMap = {
      Breakfast: ["7:00 am", "11:00 am"],
      Lunch: ["12:00 pm", "4:00 pm"],
      Snacks: ["5:00 pm", "7:00 pm"],
      Dinner: ["8:00 pm", "10:00 pm"],
    };

    const timeRange = categoryTimeMap[category];
    if (!timeRange) {
       toast.error(`No time slot defined for ${category}`);
      return;
    }

    const [startTime, endTime] = timeRange;
    const isValid = isCurrentTimeInRange(startTime, endTime);

    if (!isValid) {
       toast.error(
        `You can only add ${category} items between ${startTime} and ${endTime}.`
      );
      return;
    }

    // Add item
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }

    if (token) {
      await axios.post(
        url + "/api/cart/add",
        { itemId },
        { headers: { token } }
      );
    }
  };

  const removeFromCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (token) {
      await axios.post(
        url + "/api/cart/remove",
        { itemId },
        { headers: { token } }
      );
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const fetchFoodList = async () => {
    const response = await axios.get(url + "/api/food/list");
    setFoodList(response.data.data);
  };

  const loadCartData = async (token) => {
    const response = await axios.post(
      url + "/api/cart/get",
      {},
      { headers: { token } }
    );
    setCartItems(response.data.cartData);
  };

  useEffect(() => {
    async function loadData() {
      await fetchFoodList();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        await loadCartData(localStorage.getItem("token"));
      }
    }
    loadData();
  }, []);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
