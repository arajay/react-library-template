import { FunctionComponent } from 'react';
import Button from '@mui/material/Button';

interface ExampleComponentProps {
  foo: string;
  onClick: () => void;
}

export const ExampleComponent: FunctionComponent<ExampleComponentProps> = ({
  foo,
  onClick,
}) => {
  return (
    <Button onClick={onClick} variant="contained">{foo}</Button>
  );
}