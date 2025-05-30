import { DeleteOutline, SaveOutlined } from "@mui/icons-material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Alert, AlertTitle, Button, Grid, styled, TextField, Typography } from "@mui/material";
import 'animate.css';
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { setActiveNote, starDeletingNote, startSaveNote, starUploadingFiles } from "../../store/journal";
import { ImageGallery } from "../components";

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

export const NoteView = () => {

    const dispatch = useDispatch();
    const [showAlert, setShowAlert] = useState(false);

    const { active: note, messageSaved, isSaving } = useSelector(state => state.journal);

    const { body, title, date, onInputChange, formState } = useForm(note);

    const dateString = useMemo(() => {
        const newDate = new Date(date);
        return newDate.toUTCString();
    }, [date]);
    
    useEffect(() => {
        dispatch( setActiveNote(formState) );
    }, [formState])
    
    useEffect(() => {
        if (messageSaved.length > 0) {
          setShowAlert(true);
          const timer = setTimeout(() => setShowAlert(false), 3000); // 3 segundos
          return () => clearTimeout(timer);
        }
    }, [messageSaved]);

    const onSaveNote = () => {
        dispatch(startSaveNote())
    }

    const onFileInputChange = ({ target }) => {
        if (target.files === 0) return;
        dispatch(starUploadingFiles(target.files));
        console.log(target.files);
        
    }

    const onDelete = () => {
        dispatch(starDeletingNote());
    }

  return (
    <>
    <Grid
        className="animate__animated animate__fadeIn animate__faster"
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ 
            mb: 1
        }}
    >
        <Grid>
            <Typography fontSize={40} fontWeight='light'>{dateString}</Typography>
        </Grid>
        <Grid marginBottom={2}>
            <Button
                component="label"
                variant="outlined"
                color="primary"
                tabIndex={-1}
                sx={{ padding: 2, mr: 2 }} 
                startIcon={<CloudUploadIcon />}
                disabled={ isSaving }
                >
                Upload files 
                <VisuallyHiddenInput
                    type="file"
                    onChange={onFileInputChange}
                    multiple
                />
            </Button>            
            <Button 
                variant="contained" 
                color="primary" 
                sx={{ padding: 2 }} 
                disabled={ isSaving }
                onClick={ onSaveNote }
            >
                <SaveOutlined  sx={{ mr: 1 }}/>
                Guardar
            </Button>
        </Grid>
        <Grid container size={12} sx={{ mt: 2 }}>
            <TextField
                sx={{ border: 'none', mb: 3 }}
                placeholder="Introduce un título"
                label="Título"
                type="text"
                name="title"
                value={title}
                onChange={onInputChange}
                fullWidth
                
                >

            </TextField>

            <TextField
                sx={{ border: 'none', mb: 1 }}
                placeholder="¿Qué sucedió hoy?"
                label="¿Qué sucedió hoy?"
                type="text"
                fullWidth
                name="body"
                value={body}
                onChange={onInputChange}
                multiline
                minRows={5}>

            </TextField>
        </Grid>
        <Grid container justifyContent="end" width={'100%'}>
            <Button 
                onClick={ onDelete }                 
                variant="outlined"
                color="danger" 
                sx={{ padding: 2 }}>
                <DeleteOutline sx={{ color: 'error.main', mr: 1 }} />
                Borrar
            </Button>
        </Grid>
        <ImageGallery images={note.imageUrls}/>
    </Grid>
    {showAlert && messageSaved.length > 0 && (
        <Alert severity="success" sx={{ mt: 2, position: 'fixed', right: 10, top: 10, zIndex: 2000 }} className="animate__animated animate__fadeIn animate__faster">
            <AlertTitle>Éxito</AlertTitle>
            {messageSaved}
        </Alert>
    )}
    </>
  )
}
