"use client"
import Banner from '@/app/components/destination/bestareatostay/Banner/Banner';
import QuickSummary from '@/app/components/destination/bestareatostay/QuickSummary/quicksummary';
import Header from '@/app/components/destination/header/header';
import guideContent from '@/app/data/destination/bestplacetostay/guideContent.json';

export default function Home() {
  return (
    <>
    <Header />
      <Banner content={guideContent.banner} />
      <QuickSummary points={guideContent.quickSummary} />
    </>
  );
}
