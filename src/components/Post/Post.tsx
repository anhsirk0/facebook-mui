import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  IconButton,
  InputBase,
  Stack,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShareIcon from "@mui/icons-material/Share";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";

const Post = () => {
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1),
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "40ch",
      },
    },
  }));

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar alt="User image" src="https://placeimg.com/200/200/people" />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Homer Simpson"
        subheader="October 8, 2022"
      />
      <CardContent sx={{ pt: 0 }}>
        <Typography variant="body2" color="text.secondary">
          Some cool tech related Picturs as placeholder images
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        height="400"
        image="https://placeimg.com/600/500/tech"
        alt="Post related pic"
      />

      <Stack>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <ThumbUpOutlinedIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>

        <Divider />
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Avatar
              alt="User image"
              src="https://placeimg.com/200/200/people"
            />
          </IconButton>
          <StyledInputBase
            placeholder="Write a comment"
            inputProps={{ "aria-label": "comment" }}
          />
        </CardActions>
      </Stack>
    </Card>
  );
};

export default Post;
