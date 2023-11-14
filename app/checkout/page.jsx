"use client";
import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { removeToCartItem } from "../action/action";
const page = () => {
  const dispatch=useDispatch()
  
  const carts = useSelector((state) => state.cart.cartItems);
  const cartCount = useSelector((state) => state.cart.cartCount);
  function updateCartCountAction(count) {
    dispatch(updateCartCount(count));
  }
  function rmv(item) {
    // Dispatch the action to remove the item
    dispatch(removeToCartItem(item));

    // Calculate the updated cart count
    const updatedCartCount = cartCount - 1; // Decrement by 1 for the removed item
  }
  const [cart, setCart] = useState(0);
  
  useEffect(() => {
    setCart(carts.length);
  }, [carts]);
  return (
    <div>
      
      
        <Box sx={{ mt: 5 }}>
          <Breadcrumbs aria-label="breadcrumb">
            <Typography>Cart | {cart} Item</Typography>
          </Breadcrumbs>
        </Box>
        <Box>
          
              <Card>
                {carts.length == 0 ? (
                  <img
                    src="https://w7.pngwing.com/pngs/277/965/png-transparent-empty-cart-illustration-thumbnail.png"
                    alt="empty cart img"
                  />
                ) : (
                  carts.map((cart)=>(

                    <>
                    <Grid xs={6} md={3} key={cart.id}>
                      <CardMedia image={cart.image} width={300} height={140} component="img" alt="img"/>
                    </Grid>
                    <Grid xs={6} md={3}>
                      <CardHeader>{cart.name}</CardHeader>
                      <CardContent>
                        <Typography>{cart.price}</Typography>
                        <Typography>Qty:1</Typography>
                        <Button onClick={()=>rmv(cart)}>REMOVE</Button>
                      </CardContent>
                    </Grid>
                  
                    </>
                    ))
                )}
              </Card>
            
            
          
        </Box>
      
    </div>
  );
};

export default page;
