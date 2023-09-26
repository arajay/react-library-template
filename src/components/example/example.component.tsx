import { FunctionComponent } from 'react'
import Button from '@mui/material/Button'

export interface ExampleComponentProps {
  text: string;
  onClick: () => void;
}

export const ExampleComponent: FunctionComponent<ExampleComponentProps> = ({
  text,
  onClick,
}) => {
  return (
    <Button onClick={onClick} variant="contained">{text}</Button>
  )
}