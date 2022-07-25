import { FunctionComponent } from 'react';
import

interface ExampleComponentProps {
  foo: string;
}

export const ExampleComponent: FunctionComponent<ExampleComponentProps> = ({
  foo
}) => {
  return (
    <h1>{foo}</h1>
  );
}