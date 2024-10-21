'use client'; // This makes the component a Client Component
import Banner from '@/app/components/banner/Banner';
import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserRequest } from './store/reducers/user';
import { RootState } from './store/store';
import BestSeller from '@/app/components/bestSeller';
import Services from '@/app/components/services';
import FeaturedProducts from '@/app/components/featureProduct';
import AdidasBanner from '@/app/components/adidasBanner';

export default function Home() {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch(fetchUserRequest());
  }, [dispatch]);
  return (
    <Box>
      <Banner />
      <BestSeller />
      <AdidasBanner />
      <Services />
      <FeaturedProducts />
    </Box>
  );
}
