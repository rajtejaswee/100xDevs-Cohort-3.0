// Pick allows you to create a new type by selecting a set of properties (Keys) from an existing type (Type).

interface Users {
    id: number;
    name: string;
    email: string;
    createdAt: Date;
  }
  
  // For a profile display, only pick `name` and `email`
  type UserProfile = Pick<Users, 'name' | 'email'>;
  
  const displayUserProfile = (user: UserProfile) => {
    console.log(`Name: ${user.name}, Email: ${user.email}`);
  };
  