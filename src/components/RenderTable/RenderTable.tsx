import React from "react";
import { Table, Text, Center } from "@mantine/core";
import { jobs } from "@/data/jobs";
import { JobProps } from "@/types";
import Link from "next/link";

const MobileTable = ({ job }: { job: JobProps }) => {
  const { id, organisation, postName, lastDate, applyLink, notificationLink } =
    job;

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
              <Text>Post Name</Text>
            </th>
            <td>
              <Text>{postName}</Text>
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

type Props = {};

const RenderTable = (props: Props) => {
  const rows = jobs.map((job: JobProps) => (
    <tr key={job.id}>
      <td>{job.organisation}</td>
      <td>{job.postName}</td>
      <td>{job.lastDate}</td>
      <td>
        <Link href={job.applyLink} rel="noopener noreferrer" target="_blank">
          <Text>Apply</Text>
        </Link>
      </td>
      <td>
        <Link
          href={job.notificationLink}
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
          {jobs.map((job) => (
            <MobileTable key={job.id} job={job} />
          ))}
        </div>
      </div>
      <div className="hidden md:block m-2">
        <Table striped highlightOnHover withBorder withColumnBorders>
          <thead>
            <tr>
              <th> Organisation</th>
              <th>Post Name</th>
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
