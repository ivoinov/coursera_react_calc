export default function Input(props) {
    return (
        <input 
        ref={props.inputRef}
        type="text" 
        placeholder="Enter number" 
        pattern='[0-9]'
      />
    );
}