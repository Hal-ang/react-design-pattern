const NumberedList = ({
  items,
  sourceName,
  ItemComponent,
}: {
  items: unknown[];
  sourceName: string;
  ItemComponent: React.FC<any>;
}) => {
  return (
    <>
      {items.map((item, i) => (
        <>
          <h3> {i + 1} </h3>
          <ItemComponent key={i} {...{ [sourceName]: item }} />
        </>
      ))}
    </>
  );
};

export default NumberedList;
