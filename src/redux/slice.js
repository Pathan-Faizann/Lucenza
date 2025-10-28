import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "slice",
  initialState: {
    userDetails: [],
    products: [
      {
        id: 1,
        name: "Power Jeans",
        image: "/Lucenza/jeans1.jpg",
        price: "400",
        category: "Jeans",
      },
      {
        id: 2,
        name: "Baggy Jeans",
        image: "/Lucenza/jean2.jpg",
        price: "900",
        category: "Jeans",
      },
      {
        id: 3,
        name: "Classy Jeans",
        image: "/Lucenza/jean4.jpg",
        price: "600",
        category: "Jeans",
      },
      {
        id: 4,
        name: "Ski Jeans",
        image: "/Lucenza/jeans2.jpg",
        price: "400",
        category: "Jeans",
      },
      {
        id: 5,
        name: "Pop Jeans",
        image: "/Lucenza/jeans5.jpg",
        price: "400",
        category: "Jeans",
      },
      {
        id: 6,
        name: "Azme Jeans",
        image: "/Lucenza/jeans6.jpg",
        price: "400",
        category: "Jeans",
      },
      {
        id: 7,
        name: "Baggy Art Jeans",
        image: "/Lucenza/jeans7.jpg",
        price: "800",
        category: "Jeans",
      },
      {
        id: 8,
        name: "Baggy Black Jeans",
        image: "/Lucenza/jeans8.jpg",
        price: "800",
        category: "Jeans",
      },
      {
        id: 9,
        name: "Baggy Jeans",
        image: "/Lucenza/jeans9.jpg",
        price: "800",
        category: "Jeans",
      },
      {
        id: 10,
        name: "Cute Tshirt",
        image: "/Lucenza/ts1.jpg",
        price: "500",
        category: "Tshirt",
      },
      {
        id: 11,
        name: "White Tshirt",
        image: "/Lucenza/ts2.jpg",
        price: "600",
        category: "Tshirt",
      },
      {
        id: 12,
        name: "Pink Tshirt",
        image: "/Lucenza/ts3.jpg",
        price: "620",
        category: "Tshirt",
      },
      {
        id: 13,
        name: "Hot Red Tshirt",
        image: "/Lucenza/ts4.jpg",
        price: "700",
        category: "Tshirt",
      },
      {
        id: 14,
        name: "Slam Dunk Tshirt",
        image: "/Lucenza/ts5.jpg",
        price: "800",
        category: "Tshirt",
      },
      {
        id: 15,
        name: "Anime Printed Tshirt",
        image: "/Lucenza/ts6.jpg",
        price: "999",
        category: "Tshirt",
      },
      {
        id: 16,
        name: " Printed Tshirt",
        image: "/Lucenza/ts7.jpg",
        price: "699",
        category: "Tshirt",
      },
      {
        id: 17,
        name: "Pink Baggy Tshirt",
        image: "/Lucenza/ts8.jpg",
        price: "600",
        category: "Tshirt",
      },
      {
        id: 18,
        name: "Classy Tshirt",
        image: "/Lucenza/ts9.jpg",
        price: "600",
        category: "Tshirt",
      },
    ],
    cart: [],
    selected:{},
    Logged:{},
    orders:[],
    totalAm:""
  },
  reducers: {
    addPro:(state,action)=>{
      state.products.push(action.payload)

    },remProduct:(state,action)=>{
      state.products = state.products.filter((item)=>item.id !== action.payload)

    },
    addOrder:(state,action)=>{
      state.orders.push(action.payload)

    },
    addUser: (state, action) => {
      state.userDetails.push(action.payload);
    },
    addSelected:(state,action)=>{
        state.selected = action.payload
    },
    addTotal:(state,action)=>{
        state.totalAm = action.payload
    },


    addLog:(state,action)=>{
        state.Logged = action.payload
    },
    addCart:(state,action)=>{
     const exist = state.cart.find((item)=>item.id === action.payload.id) 
     if(!exist){
      state.cart= [...state.cart,action.payload]
     }
    },
    addQty:(state,action)=>{
      const id = action.payload
      state.cart = state.cart.map((item)=>{
        return item.id === id? {...item,qty:(item.qty || 1)+1}: item
      })
    },
    minQty:(state,action)=>{
    const id = action.payload
      state.cart = state.cart.map((item)=>{
        if (item.id === action.payload){

          const Nqty = item.qty>1? item.qty - 1 : 1;
          return {...item,qty:Nqty}
        }
        return item
         
      })
    },
    remC:(state,action)=>{
      state.cart = state.cart.filter((item)=>{
       return item.id !== action.payload
      })

    },
    remOrder:(state,action)=>{
      state.orders = state.orders.filter((item,i)=>{
       return i !== action.payload
      })

    }
  },
});
export const { addUser,addSelected,addCart,addQty,minQty,remC,remOrder,addLog,addPro ,addOrder, addTotal,remProduct} = slice.actions;
export default slice.reducer;
