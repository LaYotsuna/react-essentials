export default function TabButton({ children, onClick }) {
  return (
    <li>
      {/* Children refers to the content between the button tag in the App file */}
      <button onClick={onClick}>{children}</button>
    </li>
  );
}
