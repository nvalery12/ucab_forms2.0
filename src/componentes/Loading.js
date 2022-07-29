import { Box } from "@mui/material";
import { keyframes } from "@mui/system";
// import logo from "../img/logo.svg";

const blink = keyframes`
  0% {
    opacity: 0;
  }
  50%, {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const Loading = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        animation: `${blink} 2s infinite ease`,
        p: 2,
      }}
    >
      <div className='spinner'></div>
    </Box>
  );
};

export default Loading;