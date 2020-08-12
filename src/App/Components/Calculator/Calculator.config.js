export const generateNumberButtons = (setNum) => {
  return [
    {
      value: 1,
      onClick: () => setNum(1) 
    },
    {
      value: 2,
      onClick: () => setNum(2) 
    },
    {
      value: 3,
      onClick: () => setNum(3) 
    },
    {
      value: 4,
      onClick: () => setNum(4) 
    },
    {
      value: 5,
      onClick: () => setNum(5) 
    },
    {
      value: 6,
      onClick: () => setNum(6) 
    },
    {
      value: 7,
      onClick: () => setNum(7) 
    },
    {
      value: 8,
      onClick: () => setNum(8) 
    },
    {
      value: 9,
      onClick: () => setNum(9) 
    }
  ]
}

export const generateOperations = (setOperations) => {
  return [
    {
      value: '+',
      onClick: () => setOperations('+') 
    },
    {
      value: '-',
      onClick: () => setOperations('-') 
    },
    {
      value: '/',
      onClick: () => setOperations('/') 
    },
    {
      value: '*',
      onClick: () => setOperations('*') 
    },
  ]
}