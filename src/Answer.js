export default function Answer(props) {
  return (
    <article>
      <h1>{props.name}</h1>
      <p>My morning was</p>
      {"⭐️".repeat(props.stars)}
    </article>
  );
}
