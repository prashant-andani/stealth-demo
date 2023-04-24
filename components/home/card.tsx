import { ReactNode } from "react";

export default function Card({
  demo,
  large,
}: {
  demo: ReactNode;
  large?: boolean;
}) {
  return (
    <div
      className={`relative rounded-xl border border-gray-200 bg-white shadow-md ${
        large ? "md:col-span-2" : ""
      }`}
    >
      <div className="flex h-90 items-center justify-center">{demo}</div>
     
    </div>
  );
}
