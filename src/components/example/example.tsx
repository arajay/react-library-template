import { FunctionComponent } from 'react';
import Button from '@mui/material/Button';

interface ExampleComponentProps {
  foo: string;
}

export const ExampleComponent: FunctionComponent<ExampleComponentProps> = ({
  foo
}) => {
  return (
    <Button variant="contained">{foo}</Button>
  );
}