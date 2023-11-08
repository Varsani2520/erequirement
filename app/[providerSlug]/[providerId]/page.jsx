"use client";
import React, { useEffect, useState } from "react";
import { ProviderService } from "../../service/ProviderService";
import { useParams } from "next/navigation";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Skeleton,
  Typography,
} from "@mui/material";

const page = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const { providerSlug } = useParams();
  const [desc, setdesc] = useState([]);
  const [loading, setLoading] = useState(true);
  async function Desc() {
    try {
      const response = await ProviderService(providerSlug);
      console.log(providerSlug);
      setdesc(response.toys);
      setLoading(false)
      console.log(response.toys);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    Desc();
  }, []);
  return (
    <Container>
<Box sx={{display:'flex',mt:10}}>
  <Grid container spacing={2}>
  {loading
            ? Array.from({ length: 6 }).map((_, index) => (
                <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                  <Box>
                    <Card sx={{ maxWidth: 345 }}>
                      <Skeleton
                        variant="rectangular"
                        height={194}
                        animation="wave"
                      />
                      <CardContent>
                        <Skeleton animation="wave" />
                      </CardContent>
                    </Card>
                    <br />
                  </Box>
                </Grid>
              )):
  
      desc.map((response) => (
        <Grid item xs={12} sm={6} md={4} lg={4} key={response.id}>
          <Card sx={{ maxWidth: 345 }} key={response.id}>
            <CardHeader title={response.name}  sx={{background:'#b7bfee'}}/>
            <CardMedia
              component="img"
              height="194"
              image={response.img}
              alt={response.alt}
            />
            
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <Checkbox
                  {...label}
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                />
              </IconButton>
              <IconButton aria-label="bookmark">
                <Checkbox
                  {...label}
                  icon={<BookmarkBorderIcon />}
                  checkedIcon={<BookmarkIcon />}
                />
              </IconButton>
            </CardActions>
          </Card>
          <br/>
          </Grid>
        )
      )}
      </Grid>
      </Box>
    </Container>
  );
};

export default page;
