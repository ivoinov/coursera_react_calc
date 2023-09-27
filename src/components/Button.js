export default function Button(props) {
  return (
  <button className="{props.classes}" onClick={props.clickHandle}>
    {props.text}
  </button>
  );
}