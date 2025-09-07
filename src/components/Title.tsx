function Title(props: { text: string }) {
  return (
    <div className="w-fill mx-10 mt-7 mb-5">
      <h1 className="text-center text-4xl lg:text-5xl font-bold text-foreground">
        {props.text}
      </h1>
    </div>
  );
}

export default Title;
