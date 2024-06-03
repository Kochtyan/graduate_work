import CustomButton from "@/app/components/customButton";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
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

export default function ModalRating({
  open,
  handleClose,
  userRatingModal,
  handleRatingChange,
  removeRating,
  handleApplyRating,
}) {
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
            Оценка:
            {userRatingModal ? ` ${userRatingModal}/10` : ""}
          </Typography>
          <Typography sx={{ mt: 2 }} style={{ textAlign: "center" }}>
            <Rating
              value={userRatingModal}
              precision={0.5}
              max={10}
              sx={{ fontSize: 30 }}
              emptyIcon={<StarIcon sx={{ fontSize: 30 }} />}
              onChange={handleRatingChange}
            />
          </Typography>
          <Typography sx={{ mt: 2 }} style={{ textAlign: "right" }}>
            <CustomButton title="Убрать оценку" onClick={removeRating} />
            <CustomButton
              title="Оценить"
              disabled={userRatingModal ? false : true}
              style={{ marginLeft: "10px" }}
              onClick={handleApplyRating}
            />
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
