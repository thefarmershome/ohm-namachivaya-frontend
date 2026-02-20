import { Backdrop } from "@mui/material";
import { motion } from "framer-motion";

const dotVariants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const Loader = ({ color = "#3498db" }) => {
  return (
    <Backdrop
      open={true}
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1, gap: "15px" }}
    >
      <div style={{ display: "flex", gap: 12 }}>
        {[0, 1, 2, 3, 4].map(i => (
          <motion.div
            key={i}
            variants={dotVariants}
            animate={{ y: [0, -10, 0] }}
            style={{
              width: 16,
              height: 16,
              borderRadius: "50%",
              background: color,
              margin: 2,
              display: "inline-block"
            }}
            transition={{ delay: i * 0.2 }}
          />
        ))}
      </div>
    </Backdrop>
  );
};

export default Loader; 
