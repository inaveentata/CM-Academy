import React from "react";
import MainLayout from "@/components/Layout/MainLayout/MainLayout";
import ContentLayout from "@/components/Layout/ContentLayout/ContentLayout";
import About from "@/components/About/About";

type Props = {};

const AboutPage = (props: Props) => {
  return (
    <MainLayout>
      <ContentLayout title="About | CM Academy">
        <About />
      </ContentLayout>
    </MainLayout>
  );
};

export default AboutPage;
