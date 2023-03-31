interface TitleProps {
  title: string;
}

function Title({ title }: TitleProps) {
  return (
    <>
      <h1 className="text-2xl font-bold mb-3 mt-3">{title}</h1>
    </>
  );
}

export default Title;
