import React from "react";
import MainLayout from "@/components/Layout/MainLayout/MainLayout";
import ContentLayout from "@/components/Layout/ContentLayout/ContentLayout";
import RenderTable from "@/components/RenderTable/RenderTable";
import { scholarships } from "@/data/scholarships";
import { updateKeys } from "@/utils";
type Props = {};

const Sholarships = (props: Props) => {
  const scholarshipsData = updateKeys(scholarships);
  return (
    <MainLayout>
      <ContentLayout title="Scholarships | CM Academy">
        <RenderTable opportunities={scholarshipsData} areTheseJobs={false} />
      </ContentLayout>
    </MainLayout>
  );
};

export default Sholarships;
