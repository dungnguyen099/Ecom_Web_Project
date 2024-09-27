'use client'; // This makes the component a Client Component
import { decrement, increment } from '@/redux/reducers/counterReducer';
import { RootState } from '@/redux/store';
import { Box, Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter);
  return (
    <Box>
      <Typography>Home Page </Typography>
      <Typography>Reducer example </Typography>
      <Typography>Counter: {count}</Typography>
      <Button onClick={() => dispatch(increment())}>Increment</Button>
      <Button onClick={() => dispatch(decrement())}>Decrement</Button>
    </Box>
  );
}
