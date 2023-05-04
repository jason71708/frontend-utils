import React from "react";
import PageTitle from "components/global/PageTitle";

interface DefaultLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

const DefaultLayout = ({ children, title, description }: DefaultLayoutProps) => {
  return (
    <div className="px-4">
      <PageTitle title={title} />
      <h1 className="text-3xl font-bold my-4">{title}</h1>
      <p className="my-2">{description}</p>
      {children}
    </div>
  );
};

export default DefaultLayout;
