import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import logo from "../../../Data/logo.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { GetJobDetails } from "../../../actions/user";
export default function PersonalizedJobListingscards({ job }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        dispatch(GetJobDetails(job));
        navigate("/jobdetails");
      }}
    >
      <Card sx={{ maxWidth: 455 }}>
        <CardActionArea>
          <CardMedia
            className="employer-logo"
            component="img"
            height="140"
            image={job.employer_logo ? job.employer_logo : logo}
            alt="Employer Logo"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {job.employer_name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {job.job_city}, {job.job_country} ({job.job_employment_type})
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {job.job_title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
