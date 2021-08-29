import { Container, Grid } from '@material-ui/core'
import '../style/loader.css'

function Loader() {
    return (
        <Container>
            <Grid container
                style={{ height: window.innerHeight - 50 }}
                alignItems={"center"}
                justify={"center"}>
                <Grid
                    container
                    alignItems={"center"}
                    direction={"column"}>

                </Grid>
                <div class="lds-ripple"><div></div><div></div></div>
            </Grid>
        </Container>
    )
}

export default Loader
