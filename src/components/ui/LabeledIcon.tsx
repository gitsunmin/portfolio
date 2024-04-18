type Props = {
  icon: string;
  label: string;
};

export default (props: Props) => {
  return (
    <figure className="flex items-center flex-col">
      <img className="rounded shadow-white" width="50px" src={props.icon} />
      <figcaption className="mt-[10px] text-[1.2em]">{props.label}</figcaption>
    </figure>
  );
};
