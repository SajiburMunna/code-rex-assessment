import { PropsWithChildren } from "react";

type Props = {
  title: string;
};

function UsersLayout({ children, title }: PropsWithChildren<Props>) {
  return (
    <div className="border border-[#87A0CE] m-5 p-5 rounded bg-white">
      <h1 className="text-2xl font-bold">{title}</h1>
      <div>{children}</div>
    </div>
  );
}

export default UsersLayout;
