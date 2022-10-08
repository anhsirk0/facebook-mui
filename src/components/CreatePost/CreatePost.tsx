import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardActions,
  Divider,
  InputBase,
  Stack,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import PublicIcon from "@mui/icons-material/Public";

const CreatePost = () => {
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
      <CardContent>
        <Stack direction="row" spacing={1}>
          <Button
            variant="text"
            sx={{ color: "gray" }}
            startIcon={<CameraAltIcon />}
          >
            Photo / Video
          </Button>
          <Divider flexItem orientation="vertical" />
          <Button
            variant="text"
            sx={{ color: "gray" }}
            startIcon={<PhotoLibraryIcon />}
          >
            Photo / Video Album
          </Button>
        </Stack>
        <Divider flexItem />
        <Stack py={2} spacing={1} direction="row">
          <Avatar alt="User image" src="https://placeimg.com/200/200/people" />
          <StyledInputBase
            placeholder="Whats on your mind?"
            inputProps={{ "aria-label": "post-input" }}
          />
        </Stack>
      </CardContent>
      <Divider />
      <CardActions>
        <Stack ml="auto" direction="row" spacing={1}>
          <Button
            id="privacy-button"
            variant="outlined"
            sx={{ color: "gray" }}
            startIcon={<PublicIcon />}
            endIcon={<KeyboardArrowDownIcon />}
          >
            Public
          </Button>
          <Button variant="contained" color="primary">
            Post
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
};

export default CreatePost;
