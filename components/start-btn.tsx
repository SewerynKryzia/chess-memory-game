import { Button } from "./ui/button";

type StartBtnProps = {
  children?: React.ReactNode;
  className?: string;
  handleStart: () => void;
};

export default function StartBtn({ children, handleStart }: StartBtnProps) {
  return (
    <Button onClick={handleStart} variant="secondary" size="lg">
      {children}
    </Button>
  );
}
