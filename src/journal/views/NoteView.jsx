import { Light, SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"

export const NoteView = () => {
  return (
    <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ 
            mb: 1
        }}
    >
        <Grid>
            <Typography fontSize={40} fontWeight='light'>05 de noviembre de 2025</Typography>
        </Grid>
        <Grid>
            <Button variant="contained" color="primary" sx={{ padding: 2 }} >
                <SaveOutlined  sx={{ mr: 1 }}/>
                Guardar
            </Button>
        </Grid>
        <Grid container size={12} sx={{ mt: 2 }}>
            <TextField
                sx={{ border: 'none', mb: 1 }}
                placeholder="Introduce un título"
                label="Título"
                type="text"
                fullWidth
                >

            </TextField>

            <TextField
                sx={{ border: 'none', mb: 1 }}
                placeholder="¿Qué sucedió hoy?"
                label="¿Qué sucedió hoy?"
                type="text"
                fullWidth
                multiline
                minRows={5}>

            </TextField>
        </Grid>
        <ImageGallery/>
    </Grid>
  )
}
