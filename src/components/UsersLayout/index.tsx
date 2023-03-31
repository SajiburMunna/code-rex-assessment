import { useRouter } from "next/router";
import { PropsWithChildren } from "react";

import BackIcon from "../../../public/Icon/BackIcon";
import Title from "../Title";

interface Props {
  title: string;
  backbutton?: boolean;
}

function UsersLayout({
  children,
  title,
  backbutton = false,
}: PropsWithChildren<Props>) {
  const router = useRouter();
  return (
    <div className="border border-[#87A0CE] m-5 p-5 rounded bg-white">
      {backbutton && (
        <button
          className="bg-[#E2E9F9] text-black p-2 rounded-lg mb-3"
          type="button"
          onClick={() => router.back()}
        >
          <BackIcon />
        </button>
      )}
      <Title title={title} />
      <div>{children}</div>
    </div>
  );
}

export default UsersLayout;
