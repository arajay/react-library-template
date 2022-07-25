import { FunctionComponent } from 'react';

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