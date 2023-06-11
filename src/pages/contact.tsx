import React from "react";
import MainLayout from "@/components/Layout/MainLayout/MainLayout";
import ContentLayout from "@/components/Layout/ContentLayout/ContentLayout";

type Props = {};

function Contact({}: Props) {
  return (
    <MainLayout>
      <ContentLayout title="Contact | CM Academy">
        <h1>Contact page</h1>
      </ContentLayout>
    </MainLayout>
  );
}

export default Contact;
