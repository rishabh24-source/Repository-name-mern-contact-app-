export default function Toast({ msg, clear }) {
  setTimeout(clear, 2500);
  return <div className="toast">{msg}</div>;
}
