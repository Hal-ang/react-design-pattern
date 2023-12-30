const isObject = (data) => typeof data === 'object' && data !== null;

export const RecursiveComponent = ({ data }) => {


  if (!isObject(data)) {
    return <li>{data}</li>
  }

  const paires = Object.entries(data);
  console.log(paires)
  return (
    <>
      {paires.map(([key, value]) => (
        <li key={key}>
          <strong>{key}: </strong>
          <ul>
            <RecursiveComponent data={value} />
          </ul>
        </li>
      ))}
    </>
  )
}