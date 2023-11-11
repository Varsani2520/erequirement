import StarIcon from "@mui/icons-material/Star";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import { useParams } from "next/router"; // Updated import
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

const Page = () => {
  const carts = useSelector((state) => state.cart.cartItem);
  const [hlo, setHlo] = useState([]);
  const { card } = useParams();
  const { singleProvider } = useParams();

  const dispatch = useDispatch();

  async function Providers() {
    try {
      const response = await ProviderService(card);
      setHlo(response);
    } catch (error) {
      console.log(error);
    }
  }

  function hello(item) {
    dispatch(addToCartItem(item));
    toast.success("Add to cart success");
    dispatch.incrementTotal(item);
  }

  useEffect(() => {
    Providers();
  }, []);

  return (
    <Box mt={4}>
      <ToastContainer />
      <Container>
        <Box>
          {hlo.map((response) => {
            if (singleProvider == response.name)
              return (
                <Box key={response.id}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <Card sx={{ maxWidth: 500 }}>
                        <CardMedia
                          sx={{ height: 540 }}
                          image={response.img}
                          alt={response.alt}
                        />
                        <Button
                          variant="outlined"
                          onClick={() => hello(response)}
                        >
                          Add to Cart
                        </Button>
                        <Button variant="outlined">Buy Now</Button>
                      </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                          <Typography
                            sx={{ fontSize: 14 }}
                            color="text.secondary"
                            gutterBottom
                          >
                            {response.slug}
                          </Typography>
                          <Typography variant="h5" component="div">
                            {response.name}
                          </Typography>
                          <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Descriptions: {response.description}
                          </Typography>
                          <Typography variant="primary">
                            Price: {response.price}
                            <br />
                            Offer: {response.offer}
                          </Typography>
                          <br />
                          Rating:{" "}
                          <Rating
                            value={response.rating}
                            emptyIcon={
                              <StarIcon
                                style={{ opacity: 0.55 }}
                                fontSize="inherit"
                              />
                            }
                          />
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent>
                          <Typography variant="h5">{response.review}</Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </Box>
              );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default Page;
