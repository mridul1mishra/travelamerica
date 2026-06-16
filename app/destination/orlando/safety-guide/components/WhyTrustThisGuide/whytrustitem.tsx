import {WhyTrustItemProps} from '@/app/models/destination/whytrustitemprops'



export function WhyTrustItem({ title, lead, text }: WhyTrustItemProps) {
  return (
    <div className="whytrust-item">
      <h3 className="whytrust-item__title">{title}</h3>

      <p className="whytrust-item__text">
        <span className="whytrust-item__lead">{lead}</span> {text}
      </p>
    </div>
  );
}
