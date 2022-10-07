import {
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Stack,
} from "@mui/material";
import CakeIcon from "@mui/icons-material/Cake";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EventIcon from "@mui/icons-material/Event";
import GamesIcon from "@mui/icons-material/Games";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import PaletteIcon from "@mui/icons-material/Palette";
import PeopleIcon from "@mui/icons-material/People";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import SearchIcon from "@mui/icons-material/Search";

const SideContent = () => {
  const lists = [
    {
      title: "",
      sublists: [
        { title: "News Feed", icon: <DashboardIcon /> },
        { title: "Friends", icon: <PeopleIcon /> },
        { title: "Birthdays", icon: <CakeIcon /> },
        { title: "Events", icon: <EventIcon /> },
      ],
    },
    {
      title: "Apps",
      sublists: [
        { title: "Games", icon: <GamesIcon /> },
        { title: "Photos", icon: <PhotoLibraryIcon /> },
        { title: "Videos", icon: <VideoLibraryIcon /> },
      ],
    },
    {
      title: "Groups",
      sublists: [
        { title: "Painting Club", icon: <PaletteIcon /> },
        { title: "Chef's Kitchen", icon: <LocalDiningIcon /> },
        { title: "Find New Groups", icon: <SearchIcon /> },
      ],
    },
  ];

  return (
    <Stack>
      {lists.map((list, idx) => (
        <>
          {idx !== 0 && <Divider />}
          <List
            key={idx}
            subheader={
              <ListSubheader
                component="div"
                id="list-subheader"
                sx={{ bgcolor: "background.default" }}
              >
                {list.title}
              </ListSubheader>
            }
          >
            {list.sublists.map((sublist) => (
              <ListItemButton key={sublist.title}>
                <ListItemIcon>{sublist.icon}</ListItemIcon>
                <ListItemText primary={sublist.title} />
              </ListItemButton>
            ))}
          </List>
        </>
      ))}
    </Stack>
  );
};

export default SideContent;
