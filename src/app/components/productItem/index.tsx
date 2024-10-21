import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Box,
} from '@mui/material';

interface ProductItemProps {
  id: number;
  name: string;
  oldPrice: string;
  price: string;
  discount: string;
  imageUrl: string;
}

const ProductItem = ({
  id,
  name,
  oldPrice,
  price,
  discount,
  imageUrl,
}: ProductItemProps) => {
  return (
    <Grid item xs={12} sm={6} md={3} key={id}>
      <Card
        sx={{
          display: 'flex', // Flexbox layout
          flexDirection: 'column', // Column direction
          alignItems: 'center', // Center elements horizontally
        }}
      >
        <Box sx={{ maxWidth: 300, margin: 5 }}>
          <CardMedia
            component="img"
            sx={{
              width: '100%', // Let the image take full width of the container
              height: 'auto', // Maintain aspect ratio
              objectFit: 'contain', // Ensure the entire image fits within the container
            }}
            image={imageUrl} // Replace with your image URL
            alt={name}
          />
        </Box>

        <CardContent style={{ alignItems: 'center' }}>
          <Typography gutterBottom variant="h6" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="#40BFFF">
            đ{price}
            <Typography
              color="#9098B1"
              variant="body2"
              component="span"
              sx={{ textDecoration: 'line-through', marginLeft: 1 }}
            >
              đ{oldPrice}
            </Typography>
            <Typography
              color="#FB7181"
              variant="body2"
              component="span"
              fontWeight={'700'}
              sx={{ marginLeft: 1 }}
            >
              ({discount})
            </Typography>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ProductItem;
