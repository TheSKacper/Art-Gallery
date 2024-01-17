import { createContext, useState } from "react";

const MyContext = createContext();

const MyProvider = (props) => {
  const [data, setData] = useState({
    isLogin: false,
    isShop: false,
    name: "",
    role: "",
    shop: [],
  });

  return (
    <MyContext.Provider value={{ data, setData }}>
      {props.children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };
