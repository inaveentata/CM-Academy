import React from "react";
import MainLayout from "@/components/Layout/MainLayout/MainLayout";
import ContentLayout from "@/components/Layout/ContentLayout/ContentLayout";

type Props = {};

const Sholarships = (props: Props) => {
  return (
    <MainLayout>
      <ContentLayout title="Sholarships | CM Academy">
        <div>Sholarships</div>
      </ContentLayout>
    </MainLayout>
  );
};

export default Sholarships;
