import Grid from '@material-ui/core/Grid';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import VideoPost from '../Posts/VideoPost';
import Pagination from '@material-ui/lab/Pagination';
import usePagination from '../Pagination/Pagination';


const useStyles = makeStyles(() => ({
  gridItem: {
    padding: '0 0px',
    marginBottom: '24px',
  },
}));

const ListVideoPost = (props) => {
  const { videoPosts } = props;
  const classes = useStyles();

  let [page, setPage] = useState(1);
  const PER_PAGE_VIDEOS = videoPosts.size;

  const count = Math.ceil(videoPosts.total / PER_PAGE_VIDEOS);
  const _DATA_VIDEOS = usePagination(videoPosts.data, PER_PAGE_VIDEOS);

  const handleChangePage = (e, p) => {
    setPage(p);
    _DATA_VIDEOS.jump(p);
  };
  return (
    <Grid container direction="column">
      <Grid item>
        <Grid container spacing={7}>
          {_DATA_VIDEOS && videoPosts.data && videoPosts.data.length > 0 ? (_DATA_VIDEOS.currentData().map((element, index) => {
            return (
              <Grid item sm={6} md={4} className={classes.gridItem}>
                <VideoPost videoPost={element}/>
              </Grid>
            );
          })) : (
            <div>No VideoPost Display</div>
          )}
        </Grid>
      </Grid>
      <Grid item>
        <div style={{display: "flex", justifyContent: "center"}}>
          <Pagination
            count={count}
            size="large"
            page={page}
            onChange={handleChangePage}
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default ListVideoPost;
