export default function TodoAdd({
  onSubmit,
}: {
  onSubmit: React.FormEventHandler;
}) {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Name..." name="name" />
      <button>Add</button>
    </form>
  );
}
