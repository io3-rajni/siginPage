import Child from "./Child";
const Parent = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Child child={data} setChild={setData} />
      <button onclick={handleClickOpen}>submit</button>
    </>
  );
};
export default Parent;
