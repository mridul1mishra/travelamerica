import Banner from '../components/destination/bestareatostay/Banner';
import QuickSummary from '../components/destination/bestareatostay/QuickSummary';
import guideContent from '../data/guideContent.json';

export default function Home() {
  return (
    <>
      <Banner content={guideContent.banner} />
      <QuickSummary points={guideContent.quickSummary} />
    </>
  );
}
