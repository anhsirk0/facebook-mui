import { FC } from "react";
import { Container, Drawer } from "@mui/material";
import { SideContent } from "../../components";

interface SidebarProps {
  isDrawerOpen: boolean;
  handleClose: () => void;
}

const Sidebar: FC<SidebarProps> = ({ isDrawerOpen, handleClose }) => {
  return (
    <Drawer open={isDrawerOpen} onClose={handleClose} anchor="left">
      <Container>
        <SideContent />
      </Container>
    </Drawer>
  );
};

export default Sidebar;
