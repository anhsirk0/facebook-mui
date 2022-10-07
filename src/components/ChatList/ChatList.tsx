import { Avatar, Badge, Box, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

const ChatList = () => {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 1px #000000`,
      "&::after": {
        position: "absolute",
        top: 0,
        right: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        border: "1px solid #000000",
        content: '""',
      },
    },
  }));

  return (
    <Box sx={{ padding: "16px" }}>
      <Stack sx={{ width: "40px" }} spacing={2}>
        {Array.from(Array(15).keys()).map((idx) => (
          <StyledBadge
            key={idx}
            overlap="circular"
            color="success"
            variant="dot"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <Avatar
              alt="User image"
              src="https://placeimg.com/200/200/people"
            />
          </StyledBadge>
        ))}
      </Stack>
    </Box>
  );
};

export default ChatList;
