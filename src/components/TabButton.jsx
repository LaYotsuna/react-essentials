export default function TabButton(props) {
  function handleClick() {
    console.log("Hello World");
  }

  return (
    <li>
      {/* Children refers to the content between the button tag in the App file */}
      <button onClick={handleClick}>{props.children}</button>
    </li>
  );
}
