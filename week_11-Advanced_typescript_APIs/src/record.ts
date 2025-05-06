interface User1 {
    id: string;
    name: string;
  }
  
  type Userss = { [key: string]: User1 };
  
  const users: Userss = {
    'abc123': { id: 'abc123', name: 'John Doe' },
    'xyz789': { id: 'xyz789', name: 'Jane Doe' },
  };

  type Users2 = Record<string, User1>;

const users3: Users2 = {
  'abc123': { id: 'abc123', name: 'John Doe' },
  'xyz789': { id: 'xyz789', name: 'Jane Doe' },
};

console.log(users['abc123']); // Output: { id: 'abc123', name: 'John Doe' }

 