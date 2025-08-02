import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Chip, Grid, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarRateIcon from "@mui/icons-material/StarRate";
import { useDispatch, useSelector } from "react-redux";
import { addFavourite } from "../../slice/productSlice";
export default function ProductCard({ prod, isFavourite }) {
  const dispatch = useDispatch();
  const {
    thumbnail,
    title,
    warrantyInformation,
    price,
    brand,
    category,
    rating,
  } = prod;

  const addFavouriteProduct = (val) => {
    dispatch(addFavourite(val));
  };

  return (
    <Grid item size={3}>
      <Card
        sx={{
          maxWidth: 345,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "gainsboro",
          borderRadius: 2,
        }}
      >
        <CardMedia sx={{ height: 200 }} image={thumbnail} title={title} />

        <CardContent
          sx={{
            backgroundColor: "white",
            margin: 2,
            flexGrow: 1, // ✅ Makes this area grow and push CardActions to bottom
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              minHeight: 64, // two lines
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {title}
          </Typography>

          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Price: {price}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Brand: {brand}
            <br />
            Warranty: {warrantyInformation}
          </Typography>

          {/* This ensures category stays above the bottom, pushing CardActions down */}
          <Box sx={{ mt: "auto" }}>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Category: <Chip label={category} />
            </Typography>
          </Box>
        </CardContent>

        {/* ✅ Always stays at the bottom */}
        <CardActions
          sx={{
            backgroundColor: "Aquamarine",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <IconButton
            aria-label="add to favorites"
            onClick={() => addFavouriteProduct(prod)}
          >
            {isFavourite ? (
              <FavoriteIcon color="error" />
            ) : (
              <FavoriteIcon color="variant" />
            )}
          </IconButton>
          <div>
            <StarRateIcon />
            {rating}
          </div>
        </CardActions>
      </Card>
    </Grid>
  );
}
