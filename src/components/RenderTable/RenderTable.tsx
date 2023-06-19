import React from "react";
import { Table, Text } from "@mantine/core";
import Link from "next/link";
import MobileTable from "../MobileTable/MobileTable";

export type OpportunityProps = {
  id: string;
  organisation: string;
  title: string;
  lastDate: string;
  applyLink: string;
  notificationLink: string;
};

type Props = {
  opportunities: OpportunityProps[];
  areTheseJobs: boolean;
};

const RenderTable = (props: Props) => {
  const { opportunities, areTheseJobs } = props;
  const rows = opportunities.map((opportunity: OpportunityProps) => (
    <tr key={opportunity.id}>
      <td>{opportunity.organisation}</td>
      <td>{opportunity.title}</td>
      <td>{opportunity.lastDate}</td>
      <td>
        <Link
          href={opportunity.applyLink}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Text>Apply</Text>
        </Link>
      </td>
      <td>
        <Link
          href={opportunity.notificationLink}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Text>Download</Text>
        </Link>
      </td>
    </tr>
  ));

  return (
    <>
      <div className="flex justify-center items-center p-2 md:hidden">
        <div>
          {opportunities.map((opportunity) => (
            <MobileTable
              key={opportunity.id}
              opportunity={opportunity}
              areTheseJobs={areTheseJobs}
            />
          ))}
        </div>
      </div>
      <div className="hidden md:block m-2">
        <Table striped highlightOnHover withBorder withColumnBorders>
          <thead>
            <tr>
              <th> Organisation</th>
              <th>{areTheseJobs ? "Post" : "Course"}</th>
              <th> Last Date</th>
              <th> Apply Link </th>
              <th> Notification Link</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </div>
    </>
  );
};

export default RenderTable;
