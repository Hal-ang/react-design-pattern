import React, { useEffect, useState } from 'react';

const ControlledForm = () => {
  const [name, setName] = useState('')
  const [age, setAge] = useState()

  // 사용자가 클릭하기 전에 입력을 입력하거나 입력하기 시작할 때마다 유효성 검사가 필요한 경우
  const [error, setError] = useState(false)

  useEffect(() => {
    if (name.length < 3) {

      setError('name can not be empty')
    } else {
      setError('')
    }
  }, [name])
  
  return (
    <form >
      {error && <p>{error}</p>}
      <input name="name" type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
      <input name="age" type="text" placeholder='Age' value={age} onChange={(e) => setAge(e.target.value)} />
      <button>Submit</button>
    </form>
  );
};

export default ControlledForm;