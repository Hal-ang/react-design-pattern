import React, { useEffect, useState } from 'react';

const DataSourceWithRender = ({ getData = () => {},  render }) => {
  const [resource, setResource] = useState(null)

  useEffect(() => { 
    (async () => {
      const data = await getData()
      setResource(data)
    }) ()
  }, [getData])
  
  
  return render(resource);
};

export default DataSourceWithRender;