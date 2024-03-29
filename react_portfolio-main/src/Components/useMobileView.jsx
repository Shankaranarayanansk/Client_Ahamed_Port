import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const useMobileView = () => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));

  return isMobileView;
};

export default useMobileView;
