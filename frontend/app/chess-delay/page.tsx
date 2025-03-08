import { ChessDelayForm } from "@/components/forms/chess-delay";

export default function ChessDelay() {
  return (
    <div className="px-12 pb-12 flex flex-col gap-5">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Delay Tool
      </h3>
      <p className="leading-7">
        Please fill out the below form accurately to make sure the tool works
        properly.
      </p>
      <ChessDelayForm />
    </div>
  );
}
