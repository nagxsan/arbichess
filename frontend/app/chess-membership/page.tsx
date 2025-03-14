import { ChessMembershipForm } from "@/components/forms/chess-membership";

export default function ChessMembership() {
  return (
    <div className="px-12 pb-12 flex flex-col gap-5">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Valid membership tester tool
      </h3>
      <p className="leading-7">
        Please fill out the below form accurately to make sure the tool works
        properly.
      </p>
      <ChessMembershipForm />
    </div>
  );
}
