import Image from "next/image";
import { Inter } from "next/font/google";
import MainLayout from "@/components/Layout/MainLayout/MainLayout";
import ContentLayout from "@/components/Layout/ContentLayout/ContentLayout";
import RenderTable from "@/components/RenderTable/RenderTable";

const inter = Inter({ subsets: ["latin"] });

function HomePage() {
  return (
    <MainLayout>
      <ContentLayout title="Home | CM Academy">
        <RenderTable />
      </ContentLayout>
    </MainLayout>
  );
}

export default HomePage;
