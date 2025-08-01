    import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Chip, Grid, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarRateIcon from '@mui/icons-material/StarRate';

export default function ProductCard({prod}) {
    const {thumbnail,
title,warrantyInformation,
price,brand,category,rating}=prod
  return (
    <Grid  item size={3}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={thumbnail}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         Price :{price}
        </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {`Brand : ${brand}  `}  
       <br/>
       {`Warranty:${warrantyInformation}`}
        </Typography>
         <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         Category : <Chip label={category} />
        </Typography>
      </CardContent>
      <CardActions>
         <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        {/* <Typography variant="body2" sx={{ color: 'text.secondary' }}> */}
         <StarRateIcon /> {rating}
        {/* </Typography> */}
      </CardActions>
    </Card>
    </Grid>
  );
}
