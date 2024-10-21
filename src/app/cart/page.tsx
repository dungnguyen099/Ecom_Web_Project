import React from 'react';

import {
  Typography,
  Button,
  IconButton,
  TextField,
  Stack,
} from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const CartPage = () => {
  return (
    <div style={{ padding: '32px' }}>
      {/* Step Indicator */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '32px' }}>
        <Typography variant="h6">1</Typography>
        <Typography variant="h6">2</Typography>
        <Typography variant="h6">3</Typography>
      </div>

      {/* Cart Products */}
      <Stack spacing={4}>
        <div
          style={{
            border: '1px solid #e0e0e0',
            padding: '16px',
            borderRadius: '8px',
            position: 'relative',
          }}
        >
          <IconButton
            style={{ position: 'absolute', top: '10px', right: '10px' }}
          >
            <RemoveIcon />
          </IconButton>
          <Typography variant="h6">Nike Airmax 270</Typography>
          <Typography variant="body1">react</Typography>
          <Typography variant="body1" style={{ fontWeight: 'bold', marginTop: '16px' }}>
            $99
          </Typography>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '16px' }}>
            <IconButton>
              <RemoveIcon />
            </IconButton>
            <Typography style={{ margin: '0 16px' }}>8</Typography>
            <IconButton>
              <AddIcon />
            </IconButton>
          </div>
        </div>
        <div
          style={{
            border: '1px solid #e0e0e0',
            padding: '16px',
            borderRadius: '8px',
            position: 'relative',
          }}
        >
          <IconButton
            style={{ position: 'absolute', top: '10px', right: '10px' }}
          >
            <RemoveIcon />
          </IconButton>
          <Typography variant="h6">Nike Airmax 270</Typography>
          <Typography variant="body1">react</Typography>
          <Typography variant="body1" style={{ fontWeight: 'bold', marginTop: '16px' }}>
            $99
          </Typography>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '16px' }}>
            <IconButton>
              <RemoveIcon />
            </IconButton>
            <Typography style={{ margin: '0 16px' }}>8</Typography>
            <IconButton>
              <AddIcon />
            </IconButton>
          </div>
        </div>
      </Stack>

      {/* Voucher Code Section */}
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '32px' }}>
        <TextField
          label="Voucher code"
          variant="outlined"
          size="small"
          style={{ flexGrow: 1, marginRight: '16px' }}
        />
        <Button variant="contained" color="primary">
          Redeem
        </Button>
      </div>

      {/* Summary Section */}
      <div
        style={{
          marginTop: '32px',
          display: 'flex',
          justifyContent: 'space-between',
          padding: '16px',
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
        }}
      >
        <div>
          <Typography variant="body1">Subtotal</Typography>
          <Typography variant="body1">Shipping fee</Typography>
          <Typography variant="body1">Coupon</Typography>
        </div>
        <div>
          <Typography variant="body1">$998</Typography>
          <Typography variant="body1">$20</Typography>
          <Typography variant="body1">No</Typography>
        </div>
      </div>

      {/* Total Section */}
      <div
        style={{
          marginTop: '32px',
          display: 'flex',
          justifyContent: 'space-between',
          padding: '16px',
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          backgroundColor: '#f5f5f5',
        }}
      >
        <Typography variant="h6" style={{ fontWeight: 'bold' }}>
          TOTAL
        </Typography>
        <Typography variant="h6" style={{ fontWeight: 'bold' }}>
          $118
        </Typography>
      </div>

      {/* Checkout Button */}
      <div style={{ marginTop: '32px', textAlign: 'center' }}>
        <Button variant="contained" color="primary" style={{ width: '100%' }}>
          Check out
        </Button>
      </div>
    </div>
  );
};

export default CartPage;
