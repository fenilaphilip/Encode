import Button from "./Button.tsx";

export default function Input() {
  return (
    <form className="user-input">
      <label>Enter Text</label>
      <textarea></textarea>
      <Button>Submit</Button>
    </form>
  );
}
