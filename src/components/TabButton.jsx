export default function TabButton(props) {
  return (
    <li>
      {/* Children refers to the content between the button tag in the App file */}
      <button>{props.children}</button>
    </li>
  );
}
