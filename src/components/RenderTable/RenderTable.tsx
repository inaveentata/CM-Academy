import React from "react";
import { Table, Text, Center } from "@mantine/core";
import { notifications } from "@/data/notifications";
import { NotificatioProps } from "@/types";
import Link from "next/link";

const MobileTable = ({ notification }: { notification: NotificatioProps }) => {
  const {
    id,
    organisation,
    postName,
    appointmentMethod,
    issueDate,
    lastDate,
    applyLink,
    notificationLink,
  } = notification;

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
            <th>
              <Text>Appointment Method</Text>
            </th>
          </tr>
          <tr>
            <td>
              <Text>{postName}</Text>
            </td>
            <td>
              <Text>{appointmentMethod}</Text>
            </td>
          </tr>
          <tr>
            <th>
              <Text>Issue Date</Text>
            </th>
            <th>
              <Text>Last Date</Text>
            </th>
          </tr>
          <tr>
            <td>
              <Text>{issueDate}</Text>
            </td>
            <td>
              <Text>{lastDate}</Text>
            </td>
          </tr>
          <tr>
            <th>
              <Text>Apply Link</Text>
            </th>
            <th>
              <Text>Notification</Text>
            </th>
          </tr>
          <tr>
            <td>
              <Link href={applyLink} rel="noopener noreferrer" target="_blank">
                <Text>Apply</Text>
              </Link>
            </td>
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
  const rows = notifications.map((notification: NotificatioProps) => (
    <tr key={notification.id}>
      <td>{notification.issueDate}</td>
      <td>{notification.organisation}</td>
      <td>{notification.postName}</td>
      <td>{notification.appointmentMethod}</td>
      <td>{notification.lastDate}</td>
      <td>
        <Link
          href={notification.applyLink}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Text>Apply</Text>
        </Link>
      </td>
      <td>
        <Link
          href={notification.notificationLink}
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
          {notifications.map((notification) => (
            <MobileTable key={notification.id} notification={notification} />
          ))}
        </div>
      </div>
      <div className="hidden md:block m-2">
        <Table striped highlightOnHover withBorder withColumnBorders>
          <thead>
            <tr>
              <th>Issue Date</th>
              <th> Organisation</th>
              <th>Post Name</th>
              <th> Appointment Method</th>
              <th> Last Date</th>
              <th> Applu Link </th>
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
