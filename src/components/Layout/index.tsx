import { PropsWithChildren } from "react";

function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <div>
        <div className="h-11 bg-blue-900 flex items-center">
          <div className="p-4">
            <h1 className="text-white text-2xl">
              code<span className="text-sky-700">rex</span>
            </h1>
          </div>
        </div>
        {children}
      </div>
    </>
  );
}

export default Layout;
