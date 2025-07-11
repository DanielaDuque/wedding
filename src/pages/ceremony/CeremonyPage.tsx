import Box from "@mui/material/Box";
import {Grid, Typography, useMediaQuery} from "@mui/material";
import LeafletMapComponent from "../../components/LeafletMapComponent.tsx";
import {useTranslation} from "react-i18next";
import {useTheme} from "@mui/material/styles";
import ComingSoon from "../../components/ComingSoon.tsx";

import './CeremonyPage.scss';


function CeremonyPage() {

    const { t } = useTranslation('ceremony');
    const theme = useTheme();
    const isTabletOrMobile = useMediaQuery(theme.breakpoints.down( 'md'));


    return(
        <>
            <section className="section">
                <Box>
                    <Typography variant="h2" gutterBottom
                                sx={{
                                    textAlign: 'center',
                                    mb: 4,
                                }}
                    >{t('ceremonyDetailsTitle')}</Typography>
                    <ComingSoon height='30vh'/>
                </Box>

            </section>
            <section className="section section--hero">
                <Grid
                    container
                    direction={{xs: 'column', md: 'row'}}
                    spacing={{ xs: 1, md: 2 }}
                    justifyContent={'space-between'}
                >
                    <Grid size={{sm: 12, md: 6}} className="ceremony-details">
                        <Typography variant="h3" > {t('ceremonySectionTitle')}</Typography>
                        <Typography variant="body1">
                            <strong>{t('ceremonyPlace', {location: 'JACHTWEG 11, RAVELS'})} </strong><br/>
                        </Typography>
                        <Typography variant="body1">
                            16.00 H
                        </Typography>
                        <Typography variant="body1" >
                            {t('celebrationMessage')}
                        </Typography>
                    </Grid>
                    <Grid size={{sm: 12, md: 6}} >
                        <LeafletMapComponent
                            markers={[
                                {
                                    position: [51.3706941, 5.0092541],
                                    title: t('mapMarkerTitle'),
                                    address: t('ceremonyPlace', {location: 'JACHTWEG 11, RAVELS'}),
                                    time: '16.00 H'
                                }
                            ]}
                            height={isTabletOrMobile? '50vh' : '30vh'}
                            width={isTabletOrMobile ? '100%' : '80%'}
                        />

                    </Grid>
                </Grid>

            </section>
        </>

    );
}

export default CeremonyPage;