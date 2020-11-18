const Item = (props) => {
  return (
    <li
      className={props.active ? "enabled" : "disabled"}
      onClick={() => props.changeStatus(props.id)}
    >
      {props.name}
    </li>
  );
};

{
  /* <li
      style={props.active ? { fontWeight: "bold" } : { color: "grey" }}
      onClick={() => props.changeStatus(props.id)}
    >
      {props.name}
    </li> */
}
