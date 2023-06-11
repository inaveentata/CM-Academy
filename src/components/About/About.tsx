import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "next/link";

type Props = {};

const About = (props: Props) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        sx={{
          maxWidth: {
            xs: 320,
            sm: 480,
            md: 600,
            lg: 768,
            xl: 1024,
          },
        }}
      >
        <Box sx={{ p: "1rem" }}>
          <p>
            Our Team is working with a commitment to help the Underprivileged
            Students.This a One Stop Solution to get Job Notifications and
            University Admission related information for the Higher Studies with
            Scholarships.
          </p>
          <br />
          <p>
            We share career opportunities and guide students to reach their
            goals. We organize career guidance programmes for students in
            schools, colleges, universities and in some remote villages too.
          </p>
          <br />
          <p>
            Lack of awareness about career options, many students from
            underprivileged communities missing good opportunities.CM Academy
            always tries to help those students who are from marginalized
            sections.
          </p>
          <br />
          <p>
            Like Minded people can join our team to work towards our mission.
          </p>
          <br />
          <p>
            You can follow our youtube channel{" "}
            <Link
              href="https://youtube.com/@Career_Matters_Academy"
              rel="noopener noreferrer"
              target="_blank"
              className="underline"
            >
              Career Matters Academy
            </Link>
            .
          </p>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default About;
