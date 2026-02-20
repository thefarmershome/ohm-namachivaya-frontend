
import { Backdrop } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import Lottie1 from "../../images/LottieFiles/Lottie1.json"; // Default Lottie

const LottieLoader = ({ lottieFile, type = "default", duration = 5000, lottieLoader }) => {
  const [shouldShow, setShouldShow] = useState(false);
  const lottieRef = useRef();

  useEffect(() => {
    if (type === "timeout") {
      setShouldShow(true);
      lottieRef.current?.goToAndPlay(0, true);
      const timeout = setTimeout(() => setShouldShow(false), duration);
      return () => clearTimeout(timeout);
    } else {
      // default type: controlled by showLoader
      if (lottieLoader) {
        setShouldShow(true);
        lottieRef.current?.goToAndPlay(0, true);
      } else {
        //loader load for 5s
        const timeout = setTimeout(() => setShouldShow(false), 2000);
        return () => clearTimeout(timeout);
      }
    }
  }, [lottieLoader, type, duration]);

  const handleComplete = () => {
    if (type === "timeout") {
      if (shouldShow) {
        lottieRef.current?.goToAndPlay(0, true);
      }
    } else {
      if (lottieLoader) {
        lottieRef.current?.goToAndPlay(0, true);
      }
    }
  };

  return (
    <Backdrop
      open={shouldShow}
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1, gap: "15px" }}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={lottieFile || Lottie1}
        loop={false}
        style={{ width: "150px", height: "150px" }}
        onComplete={handleComplete}
      />
    </Backdrop>
  );
};

export default LottieLoader;
