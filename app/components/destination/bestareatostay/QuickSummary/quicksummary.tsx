import styles from './quicksummary.module.css';
import { QuickSummaryPoints } from '@/app/models/destination/bestareatostay/guidetypes';

interface Props {
  points: QuickSummaryPoints;
}

const QuickSummary = ({ points }: Props) => {
  return (
    <section className={styles.summary}>
      <h3 className={styles.heading}>Quick Summary — You’ll Learn:</h3>
      <ul className={styles.list}>
        {points.map((point, idx) => (
          <li key={idx} className={styles.item}>
            {point}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default QuickSummary;
