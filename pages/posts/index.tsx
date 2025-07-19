export interface UserData {
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

export interface UserModalProps {
  onClose: () => void;
  onSubmit: (user: UserData) => void;
}
