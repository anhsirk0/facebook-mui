import {
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import CakeIcon from "@mui/icons-material/Cake";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const RightSideContent = () => {
  const lists = [
    {
      title: "Recent Events",
      sublists: [
        {
          title: "Hiking Trip on this Friday",
          icon: <CalendarMonthIcon />,
          text: "",
        },
        {
          title: "Homer Simpson's Birthday",
          icon: <CakeIcon />,
          text: "",
        },
      ],
    },
    {
      title: "Trending",
      sublists: [
        {
          title: "Who Shot Mr. Burns?",
          icon: <TrendingUpIcon />,
          text: "This week on the Simpsons",
        },
        {
          title: "Bears Population Increases.",
          icon: <TrendingUpIcon />,
          text: "Springfield Daily News Report",
        },
        {
          title: "Kents two cents getting popular.",
          icon: <TrendingUpIcon />,
          text: "Springfield's beloved News Anchor Kent Brockman's mildly Interesting talks.",
        },
      ],
    },
  ];

  return (
    <Card sx={{ padding: "0px" }}>
      <CardContent>
        {lists.map((list, idx) => (
          <>
            {idx !== 0 && <Divider />}
            <List
              dense
              key={idx}
              subheader={
                <ListSubheader component="div" id="list-subheader">
                  {list.title}
                </ListSubheader>
              }
            >
              {list.sublists.map((sublist) => (
                <ListItem key={sublist.title} disableGutters>
                  <ListItemButton>
                    <ListItemIcon>{sublist.icon}</ListItemIcon>
                    <ListItemText
                      primary={sublist.title}
                      secondary={sublist.text}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </>
        ))}
      </CardContent>
    </Card>
  );
};

export default RightSideContent;
