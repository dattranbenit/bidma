import React from 'react';
import GridContainer from '../../../@jumbo/components/GridContainer';
import PageContainer from '../../../@jumbo/components/PageComponents/layouts/PageContainer';
import Box from '@material-ui/core/Box';
import IntlMessages from '../../../@jumbo/utils/IntlMessages';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import SidebarButtons from '../../../@jumbo/components/AppLayout/partials/SideBar/SIdebarButtons';
import BidCard from '../../../components/CustomCard/BidCard';

const breadcrumbs = [
  { label: 'Home', link: '/' },
  { label: 'Sample Page', isActive: true },
];

const cardDetail = {
  name: "Máy xúc bánh xích",
  remaining: "1 ngày 16:23:22",
  model: "KOMATSU PC120-8-44312",
  price: "765.234.111",
  location: "Osaka Port-A",
  yearMade: "1991",
  onBoard: "6303 h"
}

const SamplePage = () => {
  return (
    <PageContainer heading={<IntlMessages id="pages.samplePage" />} breadcrumbs={breadcrumbs}>
      <GridContainer>
        <Grid item xs={12}>
          <Box>
            <IntlMessages id="pages.samplePage.description" />
          </Box>
          <Divider />
          <div style={{ marginTop: 24 }}>
            <h3>Knowledge Base and Support</h3>
            <SidebarButtons />
          </div>

          {/* test components */}
          <div>
            <BidCard 
              name={cardDetail.name} 
              remaining={cardDetail.remaining} 
              model={cardDetail.model} 
              price={cardDetail.price}
              location={cardDetail.location}
              yearMade={cardDetail.yearMade}
              onBoard={cardDetail.onBoard}
            />
          </div>
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default SamplePage;
