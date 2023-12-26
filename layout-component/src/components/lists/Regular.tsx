const RegularList = ({
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
        <ItemComponent key={i} {...{ [sourceName]: item }} />
      ))}
    </>
  );
};

export default RegularList;
