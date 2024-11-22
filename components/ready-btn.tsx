import { Button } from "./ui/button";

export default function ReadyBtn({ handleReady }: { handleReady: () => void }) {
  return (
    <div className="flex h-[55%] min-h-64 items-center">
      <Button onClick={handleReady} size="lg" variant="secondary">
        Ready To Answer
      </Button>
    </div>
  );
}
