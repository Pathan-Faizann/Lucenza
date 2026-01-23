import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "slice",
  initialState: {
    userDetails: [],
   
    cart: [],
    selected:{},
    // Logged:JSON.parse(localStorage.getItem("user")) || null,
    orders:[],
    totalAm:"",
    toUpdate:{},

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
   
    addSelected:(state,action)=>{
        state.selected = action.payload
    },
    toUpdatePro:(state,action)=>{
        state.toUpdate = action.payload
    },
    
    addTotal:(state,action)=>{
        state.totalAm = action.payload
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
    // const id = action.payload
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
export const { addSelected,addCart,addQty,minQty,remC,remOrder,addPro ,addOrder, addTotal,remProduct,toUpdatePro} = slice.actions;
export default slice.reducer;
