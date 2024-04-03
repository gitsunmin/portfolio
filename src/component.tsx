const Component = (props: {message: string}) => {
  return (
    <body>
      <h1 style={{color: 'red'}}>{props.message}</h1>
    </body>
  );
}

Component.displayName = 'Component';

console.log(<Component message="Hello World" />);

export default Component;