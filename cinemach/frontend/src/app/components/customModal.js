import CustomButton from "@/app/components/customButton";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#5a5a5a",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function CustomModal({ open, handleClose, goToLink }) {
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            Успешная регистарция
          </Typography>
          <Typography sx={{ mt: 2 }} style={{ textAlign: "center" }}>
            Пользователь успешно зарегистрирован
          </Typography>
          <Typography sx={{ mt: 2 }} style={{ textAlign: "right" }}>
            <CustomButton title="Продолжить" onClick={goToLink} />
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
