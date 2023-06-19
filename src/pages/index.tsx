import MainLayout from "@/components/Layout/MainLayout/MainLayout";
import ContentLayout from "@/components/Layout/ContentLayout/ContentLayout";
import RenderTable from "@/components/RenderTable/RenderTable";
import { jobs } from "@/data/jobs";
import { updateKeys } from "@/utils";

function HomePage() {
  const jobsData = updateKeys(jobs);
  return (
    <MainLayout>
      <ContentLayout title="Jobs | CM Academy">
        <RenderTable opportunities={jobsData} areTheseJobs={true} />
      </ContentLayout>
    </MainLayout>
  );
}

export default HomePage;
