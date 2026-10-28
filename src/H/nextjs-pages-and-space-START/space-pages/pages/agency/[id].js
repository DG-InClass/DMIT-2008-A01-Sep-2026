// pages/agency/[id].js
// The [id] is called a "slug"

import Head from 'next/head';
import { Container, Grid, Typography } from '@mui/material';
import NavBar from '@components/NavBar';
import SimpleDetailsCard from '@components/SimpleDetailsCard';
import LoadingCircle from '@components/LoadingCircle';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getAgency } from '@utils/api/agencies';

export default function Agency() {
    const [agencyDetails, setAgencyDetails] = useState(null);

    const router = useRouter();
    const { id } = router.query; // Note: this uses object destructuring

    useEffect(() => {
        getAgency(id).then((data) => {
            setAgencyDetails(data);
        });
    }, [id]); // This effect will run whenever the id changes

    return <>
        <NavBar />
        {
            !agencyDetails ?
            <LoadingCircle />
            :
            <Container sx={{paddingTop:2}}>
                <Grid container>
                    <Grid item xs="2">
                        <img
                            alt={agencyDetails.name}
                            src={agencyDetails.logo_url}
                            style={{
                                width: '120px'
                            }} 
                        />
                    </Grid>
                    <Grid item xs="10">
                        <Typography variant="h3" gutterBottom>
                            {agencyDetails.name}
                            &nbsp;
                            ({agencyDetails.abbrev})
                        </Typography>
                    </Grid>
                    <Grid item xs="4">
                        <Typography variant="h5">Launch Details</Typography>
                        <SimpleDetailsCard
                            title='Total Launches'
                            description={agencyDetails.total_launch_count}
                        />
                        <SimpleDetailsCard
                            title='Successful Launches'
                            description={agencyDetails.successful_launches}
                        />
                        <SimpleDetailsCard
                            title='Successful Landings'
                            description={agencyDetails.successful_landings}
                        />
                    </Grid>
                    <Grid item xs="4">
                        <Typography variant="h5">
                            {`Agency Information`}
                        </Typography>
                        <SimpleDetailsCard 
                            title={'administrator'}
                            description={`${agencyDetails.administrator}`}
                        />
                        <SimpleDetailsCard 
                            title={'Space Agency Details'}
                            description={`Founded ${agencyDetails.founding_year}`}
                            subDescription={agencyDetails.description}
                        />
                    </Grid>
                </Grid>
                <Grid item xs="4">
                    <Typography variant="h5">
                        {`SpaceCraft`}
                    </Typography>
                    { agencyDetails.spacecraft_list && agencyDetails.spacecraft_list.map((spaceCraft)=> {
                        return <SimpleDetailsCard 
                                key={spaceCraft.id}
                            description={`${spaceCraft.name}`}
                            buttonCallback={()=> {
                                console.log("go to the space page")    
                            }}
                            buttonName="Go to SpaceCraft"
                            />
                    })}
                </Grid>
            </Container>
        }
    </>
}
