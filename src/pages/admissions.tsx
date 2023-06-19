import React from "react";
import MainLayout from "@/components/Layout/MainLayout/MainLayout";
import ContentLayout from "@/components/Layout/ContentLayout/ContentLayout";
import RenderTable from "@/components/RenderTable/RenderTable";
import { admissions } from "@/data/admissions";
import { updateKeys } from "@/utils";
type Props = {};

const Admissions = (props: Props) => {
  const admissionsData = updateKeys(admissions);
  return (
    <MainLayout>
      <ContentLayout title="Admissions | CM Academy">
        <RenderTable opportunities={admissionsData} areTheseJobs={false} />
      </ContentLayout>
    </MainLayout>
  );
};

export default Admissions;
