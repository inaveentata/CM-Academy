import React from "react";
import Head from "next/head";

type ContentLayoutProps = {
  children: React.ReactNode;
  title: string;
};

const ContentLayout = ({ children, title }: ContentLayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </>
  );
};

export default ContentLayout;
