import React from "react";
import { Table, Text } from "@mantine/core";
import Link from "next/link";
import { OpportunityProps } from "../RenderTable/RenderTable";

type MobileTableProps = {
  areTheseJobs: boolean;
  opportunity: OpportunityProps;
};
const MobileTable = ({ areTheseJobs, opportunity }: MobileTableProps) => {
  const { id, organisation, title, lastDate, applyLink, notificationLink } =
    opportunity;

  return (
    <Table
      striped
      highlightOnHover
      withBorder
      withColumnBorders
      sx={{ marginBottom: "1rem" }}
    >
      <thead>
        <tr>
          <th colSpan={2}>
            <Text size="lg" align="center">
              {organisation}
            </Text>
          </th>
        </tr>
      </thead>
      <tbody>
        <React.Fragment key={id}>
          <tr>
            <th>
              <Text>{areTheseJobs ? "Post" : "Course"}</Text>
            </th>
            <td>
              <Text>{title}</Text>
            </td>
          </tr>
          <tr>
            <th>
              <Text>Last Date</Text>
            </th>
            <td>
              <Text>{lastDate}</Text>
            </td>
          </tr>
          <tr>
            <th>
              <Text>Apply Link</Text>
            </th>
            <td>
              <Link href={applyLink} rel="noopener noreferrer" target="_blank">
                <Text>Apply</Text>
              </Link>
            </td>
          </tr>
          <tr>
            <th>
              <Text>Notification</Text>
            </th>
            <td>
              <Link
                href={notificationLink}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Text>Download</Text>
              </Link>
            </td>
          </tr>
        </React.Fragment>
      </tbody>
    </Table>
  );
};

export default MobileTable;
