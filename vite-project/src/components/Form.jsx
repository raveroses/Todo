export default function Form() {
  return (
    <div className="inform-place">
      <form>
        <input type="text" placeholder="Add your list here" />
        <button type="submit" className="add">
          ADD
        </button>
      </form>
    </div>
  );
}
