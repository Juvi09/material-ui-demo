import React from "react";
import { Typography,
         AppBar, 
         Card, 
         CardActions, 
         CardContent, 
         CardMedia, 
         CssBaseline, 
         Grid, 
         Toolbar, 
         Container,
         Button,
         ButtonGroup  } from '@mui/material';
import CameraIcon from '@mui/icons-material/PhotoCamera';

const App = () => {
    return (
        <>
            <CssBaseline />
              <AppBar position="relative">
                    <Toolbar>
                     <CameraIcon sx={{ mr: 2 }} />
                        <Typography vatiant="h6">
                            Photo Album
                        </Typography>
                    </Toolbar>
              </AppBar>
              <main>
                <div>
                    <Container maxWidth="sm">
                        <Typography variant="h2" align="center" color="text.primary" gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography variant="h5" align="center" color="text.secondary" paragraph>
                            Hello everyone, This is a photo album and I am trying to  make this sentence as long as possible so we can see how does it look on the screen.
                        </Typography>
                        <div>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                   <Button variant="contained" color="primary">
                                    See my photos
                                   </Button>
                                </Grid>
                              <Grid item>
                                <Button variant="outlined" color="primary">
                                    Secondary action
                                </Button>
                              </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                {/* <ButtonGroup variant="contained" color="primary" aria-label="outlined primary button group">
                   <Button>One</Button>
                   <Button>Two</Button>
                   <Button>Three</Button>
                </ButtonGroup> */}
              </main>
        </>
    );
}

export default App;