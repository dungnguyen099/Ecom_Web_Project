'use client'; // This makes the component a Client Component
import Banner from '@/components/banner/Banner';
import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserRequest } from './store/reducers/user';
import { RootState } from './store/store';

export default function Home() {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch(fetchUserRequest());
  }, [dispatch]);
  return (
    <Box>
      <div>{loading ? <p>Loading...</p> : <p>User: {data?.name}</p>}</div>
      <Banner />
    </Box>
  );
}
