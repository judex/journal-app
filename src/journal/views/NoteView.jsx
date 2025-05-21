import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import 'animate.css';
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { ImageGallery } from "../components";

export const NoteView = () => {
    const { active: note } = useSelector(state => state.journal);

    const { body, title, date, onInputChange, formState } = useForm(note);

    const dateString = useMemo(() => {
        const newDate = new Date(date);
        return newDate.toUTCString();
    }, [date]);
    
  return (
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
            <Button variant="contained" color="primary" sx={{ padding: 2 }} >
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
        <ImageGallery/>
    </Grid>
  )
}
