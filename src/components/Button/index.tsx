import { ButtonContainer, ButtonContainerProps } from './styles';

interface ButtonProps extends Partial<ButtonContainerProps> {
  label: string;
  color?: 'primary' | 'secondary';
  onClick: () => void;
}

export function Button({ label, color = 'primary', onClick }: ButtonProps) {
  return (
    <ButtonContainer data-testid="button-comp" color={color} onClick={onClick}>
      {label}
    </ButtonContainer>
  );
}
