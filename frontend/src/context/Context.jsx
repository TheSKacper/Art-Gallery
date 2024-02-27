import { createContext, useState } from "react";
import { toast } from 'react-toastify';

const MyContext = createContext();

const MyProvider = (props) => {
  const [data, setData] = useState({
    isLogin: false,
    isShop: false,
    name: "",
    role: "",
    shop: [],
  });

  const notify = (text,option) => toast(text,option);

  return (
    <MyContext.Provider value={{ data, setData,notify }}>
      {props.children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };
