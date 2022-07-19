export default function CountdownItem({ title, count }) {
  return (
    <div className="countdown-item">
      <div className="countdown-item__title">{title}</div>
      <div className="countdown-item__count">{count}</div>
    </div>
  );
}
