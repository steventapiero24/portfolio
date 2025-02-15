import React, { useEffect, useState } from "react";
// import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { styled } from "@mui/material/styles";
import Estrellanaranja from "../../assets/estrella naranja.png";
import Estrellaazul from "../../assets/estrella azul.png";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./Header.css";
// import DialogTitle from "@mui/material/DialogTitle";
// import DialogContent from "@mui/material/DialogContent";
// import DialogActions from "@mui/material/DialogActions";
// import IconButton from "@mui/material/IconButton";
// import CloseIcon from "@mui/icons-material/Close";
// import Typography from "@mui/material/Typography";

gsap.registerPlugin(ScrollTrigger);

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const Header = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    gsap.to(".estrella-naranja img", {
      rotation: 360,
      duration: 3,
      repeat: -1,
      ease: "linear",
    });

    gsap.set(".estrella-naranja img", { y: "-700px" });
    gsap.to(".estrella-naranja img", {
      y: "+=800",
      scrollTrigger: {
        trigger: ".header",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        markers: true,
      },
    });

    gsap.to(".estrella-azul img", {
      rotation: 360,
      duration: 5,
      repeat: -1,
      ease: "linear",
    });

    gsap.set(".estrella-azul img", { y: "-400px" });
    gsap.to(".estrella-azul img", {
      y: "+=600",
      scrollTrigger: {
        trigger: ".header",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        markers: true,
      },
    });
  }, []);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <div className="header" id="header">
      <div className="container-header">
        <div className="container__estrella-naranja">
          <div className="estrella-naranja">
            <img src={Estrellanaranja} alt="estrella naranja" />
          </div>
        </div>
        <div className="header-titulo">
          <h3>¡Hola! Bienvenido a</h3>
          <h2>mi sitio web</h2>
          <p>
            Developer especializado en Ux/UI, creativo, apasionado y amante del
            buen diseño.
          </p>
        </div>
        <div className="container__estrela-azul">
          <div className="estrella-azul">
            <img src={Estrellaazul} alt="estrella azul" />
          </div>
        </div>
      </div>
      <div className="header-parrafo">
        <p>
          “Lo funcional es mejor que lo bello, <br />
          porque lo que funciona bien <br />
          permanece en el tiempo”.
        </p>
      </div>
      {/* Botón para abrir el diálogo */}
        {/* <Button variant="outlined" onClick={handleClickOpen}>
          Abrir diálogo
        </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Modal title
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={(theme) => ({
              position: "absolute",
              right: 8,
              top: 8,
              color: theme.palette.grey[500],
            })}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Guardar cambios
          </Button>
        </DialogActions>
      </BootstrapDialog> */}
    </div>
  );
};

export default Header;
