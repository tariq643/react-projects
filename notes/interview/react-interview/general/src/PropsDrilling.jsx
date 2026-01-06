function GrandParent() {
  const data = "hello from grandparent";
  return <Parent data={data} />;
}

function Parent({ data }) {
  return <Child data={data} />;
}

function Child({ data }) {
  console.log(data); // data is drilled through the parent
}

export default GrandParent;
