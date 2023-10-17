import { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full">
      <main className="md:pl-20 pt-16 h-full">{children}</main>
    </div>
  );
};
export default RootLayout;